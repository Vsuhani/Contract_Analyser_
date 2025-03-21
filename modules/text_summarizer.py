import os
import logging
from typing import Dict, Any

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Import OpenAI
from openai import OpenAI

# Initialize OpenAI client
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def summarize_contract(text: str) -> Dict[str, Any]:
    """
    Summarize contract text using OpenAI's GPT model.
    
    Args:
        text: The contract text to summarize
        
    Returns:
        A dictionary containing the contract summary and metadata
    """
    if not text:
        logger.warning("Empty text provided for summarization")
        return {
            "summary": "No text provided for summarization.",
            "error": "Empty document"
        }
    
    try:
        # Limit text length for API call
        max_chars = 32000  # GPT-4o has a large context window
        truncated_text = text[:max_chars] if len(text) > max_chars else text
        
        if len(text) > max_chars:
            logger.warning(f"Text was truncated from {len(text)} to {max_chars} characters for API call")
        
        # Prepare the prompt for the OpenAI API
        prompt = f"""
        Please analyze and summarize the following legal contract:

        {truncated_text}
        
        Provide your response as a JSON object with the following structure:
        {{
            "executive_summary": "A brief 2-3 sentence summary of the entire contract",
            "key_points": ["List of 5-7 bullet points covering the most important aspects"],
            "contract_type": "Type of legal document (e.g., employment, NDA, service agreement)",
            "effective_date": "The date when the contract becomes effective if mentioned",
            "duration": "Contract duration if specified",
            "termination_conditions": "Summary of how the contract can be terminated"
        }}
        """
        
        # Call the OpenAI API
        # the newest OpenAI model is "gpt-4o" which was released May 13, 2024.
        # do not change this unless explicitly requested by the user
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a legal expert specializing in contract analysis and summarization."},
                {"role": "user", "content": prompt}
            ],
            response_format={"type": "json_object"}
        )
        
        # Extract and return the summary
        summary_content = response.choices[0].message.content
        
        import json
        summary_dict = json.loads(summary_content)
        
        # Add metadata
        summary_dict["text_length"] = len(text)
        summary_dict["is_truncated"] = len(text) > max_chars
        
        return summary_dict
    
    except Exception as e:
        logger.error(f"Error in contract summarization: {str(e)}", exc_info=True)
        return {
            "summary": "An error occurred during contract summarization.",
            "error": str(e)
        }
