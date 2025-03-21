import os
import re
import logging
from typing import Dict, List, Any

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Import OpenAI
from openai import OpenAI

# Initialize OpenAI client
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def extract_clauses(text: str) -> Dict[str, Any]:
    """
    Extract key clauses and important terms from contract text.
    
    Args:
        text: The contract text
        
    Returns:
        A dictionary containing extracted clauses and terms
    """
    if not text:
        logger.warning("Empty text provided for clause extraction")
        return {
            "clauses": [],
            "terms": [],
            "error": "Empty document"
        }
    
    try:
        # Use both techniques: pattern-based extraction and AI-based extraction
        pattern_clauses = extract_clauses_by_pattern(text)
        ai_clauses = extract_clauses_by_ai(text)
        
        # Combine and return results
        return {
            "pattern_based": pattern_clauses,
            "ai_extracted": ai_clauses,
            "text_length": len(text)
        }
    
    except Exception as e:
        logger.error(f"Error in clause extraction: {str(e)}", exc_info=True)
        return {
            "clauses": [],
            "terms": [],
            "error": str(e)
        }

def extract_clauses_by_pattern(text: str) -> Dict[str, Any]:
    """
    Extract clauses using regex patterns for common clause headers.
    
    Args:
        text: The contract text
        
    Returns:
        A dictionary containing extracted clauses
    """
    # Common clause heading patterns in contracts
    clause_patterns = {
        "definitions": r"(?i)(^|\n)(\d+\.\s*)?definitions?[\s:]",
        "term": r"(?i)(^|\n)(\d+\.\s*)?term(\s+of\s+agreement)?[\s:]",
        "payment": r"(?i)(^|\n)(\d+\.\s*)?payment(\s+terms)?[\s:]",
        "confidentiality": r"(?i)(^|\n)(\d+\.\s*)?confidentiality[\s:]",
        "termination": r"(?i)(^|\n)(\d+\.\s*)?termination[\s:]",
        "warranty": r"(?i)(^|\n)(\d+\.\s*)?warrant(y|ies)[\s:]",
        "indemnification": r"(?i)(^|\n)(\d+\.\s*)?indemnification[\s:]",
        "governing_law": r"(?i)(^|\n)(\d+\.\s*)?governing\s+law[\s:]",
        "dispute_resolution": r"(?i)(^|\n)(\d+\.\s*)?dispute\s+resolution[\s:]",
        "intellectual_property": r"(?i)(^|\n)(\d+\.\s*)?intellectual\s+property[\s:]",
        "limitation_of_liability": r"(?i)(^|\n)(\d+\.\s*)?limitation\s+of\s+liability[\s:]"
    }
    
    extracted_clauses = {}
    
    # Extract clauses based on patterns
    for clause_type, pattern in clause_patterns.items():
        matches = re.finditer(pattern, text)
        
        for match in matches:
            start_pos = match.start()
            
            # Try to find the next section heading or use end of text
            next_section_match = re.search(r"(?i)(^|\n)(\d+\.\s*)?[A-Z][A-Za-z\s]+[\s:]", text[start_pos + 1:])
            
            if next_section_match:
                end_pos = start_pos + 1 + next_section_match.start()
                clause_text = text[start_pos:end_pos].strip()
            else:
                # If no next section, take a reasonable amount of text (max 2000 chars)
                clause_text = text[start_pos:start_pos + 2000].strip()
                
                # Try to end at a paragraph break
                paragraph_break = re.search(r"\n\s*\n", clause_text)
                if paragraph_break and paragraph_break.start() > 100:  # Ensure we get a meaningful chunk
                    clause_text = clause_text[:paragraph_break.start()].strip()
            
            # Store the extracted clause
            extracted_clauses[clause_type] = clause_text
    
    # Extract dates
    dates = extract_dates(text)
    
    # Extract monetary values
    monetary_values = extract_monetary_values(text)
    
    return {
        "clauses": extracted_clauses,
        "dates": dates,
        "monetary_values": monetary_values
    }

def extract_dates(text: str) -> List[str]:
    """Extract dates from the contract text."""
    # Pattern for common date formats
    date_pattern = r"\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b|\b\d{1,2}/\d{1,2}/\d{2,4}\b|\b\d{1,2}-\d{1,2}-\d{2,4}\b"
    
    dates = re.findall(date_pattern, text)
    return dates[:10]  # Limit to top 10 dates

def extract_monetary_values(text: str) -> List[str]:
    """Extract monetary values from the contract text."""
    # Pattern for monetary values ($ or USD followed by amount)
    money_pattern = r"\$\s*\d{1,3}(?:,\d{3})*(?:\.\d{2})?|\b\d{1,3}(?:,\d{3})*(?:\.\d{2})?\s*(?:dollars|USD)"
    
    values = re.findall(money_pattern, text)
    return values[:10]  # Limit to top 10 monetary values

def extract_clauses_by_ai(text: str) -> Dict[str, Any]:
    """
    Extract clauses using AI (OpenAI API).
    
    Args:
        text: The contract text
        
    Returns:
        A dictionary containing AI-extracted clauses and terms
    """
    try:
        # Limit text length for API call
        max_chars = 32000  # GPT-4o has a large context window
        truncated_text = text[:max_chars] if len(text) > max_chars else text
        
        if len(text) > max_chars:
            logger.warning(f"Text was truncated from {len(text)} to {max_chars} characters for AI clause extraction")
        
        # Prepare the prompt for the OpenAI API
        prompt = f"""
        Please analyze the following legal contract and extract key clauses and important terms:

        {truncated_text}
        
        Provide your response as a JSON object with the following structure:
        {{
            "parties": ["List of parties involved in the contract"],
            "key_clauses": [
                {{
                    "title": "Clause title",
                    "summary": "Brief summary of the clause",
                    "importance": "High/Medium/Low"
                }}
            ],
            "key_dates": [
                {{
                    "description": "What this date represents",
                    "date": "The actual date from the document"
                }}
            ],
            "financial_terms": [
                {{
                    "description": "Description of the financial term",
                    "value": "The monetary value or calculation method"
                }}
            ],
            "obligations": ["List of key obligations for each party"],
            "restrictive_clauses": ["List of restrictions or prohibitions"]
        }}
        """
        
        # Call the OpenAI API
        # the newest OpenAI model is "gpt-4o" which was released May 13, 2024.
        # do not change this unless explicitly requested by the user
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a legal expert specializing in contract analysis and clause extraction."},
                {"role": "user", "content": prompt}
            ],
            response_format={"type": "json_object"}
        )
        
        # Extract and return the clauses
        clauses_content = response.choices[0].message.content
        
        import json
        clauses_dict = json.loads(clauses_content)
        
        # Add metadata
        clauses_dict["is_truncated"] = len(text) > max_chars
        
        return clauses_dict
    
    except Exception as e:
        logger.error(f"Error in AI-based clause extraction: {str(e)}", exc_info=True)
        return {
            "error": str(e),
            "key_clauses": [],
            "parties": []
        }
