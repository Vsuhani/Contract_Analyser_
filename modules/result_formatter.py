import logging
from typing import Dict, Any

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def format_results(text: str, summary: Dict[str, Any], clauses: Dict[str, Any]) -> Dict[str, Any]:
    """
    Format the results of contract analysis for presentation.
    
    Args:
        text: The original contract text
        summary: The summary of the contract
        clauses: The extracted clauses and terms
        
    Returns:
        A formatted dictionary with all analysis results
    """
    try:
        # Create a structured result with all important information
        result = {
            "document": {
                "text_length": len(text),
                "word_count": len(text.split()),
                "text_preview": text[:1000] + "..." if len(text) > 1000 else text,
            },
            "summary": summary,
            "clauses": clauses,
            "metadata": {
                "processing_timestamp": get_current_timestamp()
            }
        }
        
        return result
    
    except Exception as e:
        logger.error(f"Error formatting results: {str(e)}", exc_info=True)
        return {
            "error": f"Error formatting results: {str(e)}",
            "document": {"text_length": len(text) if text else 0},
            "summary": summary or {},
            "clauses": clauses or {}
        }

def get_current_timestamp() -> str:
    """Get current timestamp in ISO format."""
    from datetime import datetime
    return datetime.now().isoformat()
