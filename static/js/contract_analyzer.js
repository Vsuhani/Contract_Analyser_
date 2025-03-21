/**
 * Contract Analysis System - Contract Analyzer Module
 * This module handles the analysis of contracts using OpenAI's API
 */

// Constants for OpenAI API
const CONTRACT_ANALYZER_API_ENDPOINT = '/api/openai-proxy';
const CONTRACT_ANALYZER_MODEL = 'gpt-4o'; // The newest OpenAI model is "gpt-4o" which was released May 13, 2024. Do not change this unless explicitly requested by the user

class ContractAnalyzer {
  constructor() {
    this.isProcessing = false;
    this.lastAnalyzedText = '';
    this.lastAnalysisResults = null;
  }
  
  /**
   * Analyze a contract document
   * @param {string} contractText - The full text of the contract
   * @param {string} fileName - The name of the file
   * @returns {Promise<Object>} Analysis results
   */
  async analyzeContract(contractText, fileName) {
    if (!contractText || contractText.trim() === '') {
      throw new Error('Contract text is empty');
    }
    
    this.isProcessing = true;
    this.lastAnalyzedText = contractText;
    
    try {
      console.log(`Starting analysis of contract: ${fileName} (${contractText.length} characters)`);
      
      // Generate summary using AI
      const summary = await this.generateContractSummary(contractText);
      
      // Extract clauses using AI
      const clauses = await this.extractContractClauses(contractText);
      
      // Extract additional info (dates, monetary values)
      const dates = this.extractDates(contractText);
      const monetaryValues = this.extractMonetaryValues(contractText);
      
      // Add additional extracted info to clauses object
      clauses.dates = dates;
      clauses.monetary_values = monetaryValues;
      
      // Create the final analysis result
      const results = {
        filename: fileName,
        text: contractText,
        summary: summary,
        clauses: clauses,
        timestamp: new Date().toISOString()
      };
      
      this.lastAnalysisResults = results;
      this.isProcessing = false;
      
      return results;
    } catch (error) {
      this.isProcessing = false;
      console.error('Error analyzing contract:', error);
      throw error;
    }
  }
  
  /**
   * Generate a summary of the contract using OpenAI API
   * @param {string} contractText - The contract text
   * @returns {Promise<Object>} The summary object
   */
  async generateContractSummary(contractText) {
    try {
      console.log('Generating contract summary...');
      
      // Prepare truncated text for API
      const truncatedText = this.truncateText(contractText, 12000);
      
      // Mock API call response (in production, this would be a real API call)
      // In a real implementation, we would call:
      // const response = await fetch('/api/summarize', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ text: truncatedText })
      // });
      // const data = await response.json();
      
      // Simulate processing time
      await this.sleep(1500);
      
      // For demonstration, generate a mock summary based on text analysis
      const isSoftwareDevelopment = contractText.toLowerCase().includes('software') && 
                                  (contractText.toLowerCase().includes('development') || 
                                   contractText.toLowerCase().includes('developer'));
      
      const isEmployment = contractText.toLowerCase().includes('employment') || 
                           contractText.toLowerCase().includes('employee') || 
                           contractText.toLowerCase().includes('salary');
      
      const isLease = contractText.toLowerCase().includes('lease') || 
                      contractText.toLowerCase().includes('premises') || 
                      contractText.toLowerCase().includes('landlord') || 
                      contractText.toLowerCase().includes('tenant');
      
      const isNDA = contractText.toLowerCase().includes('confidential') && 
                    contractText.toLowerCase().includes('non-disclosure');
      
      let contractType = 'General Agreement';
      if (isSoftwareDevelopment) contractType = 'Software Development Agreement';
      else if (isEmployment) contractType = 'Employment Agreement';
      else if (isLease) contractType = 'Commercial Lease Agreement';
      else if (isNDA) contractType = 'Non-Disclosure Agreement';
      
      // Extract parties using regex
      const partiesMatch = contractText.match(/between\s*([^,]+),?\s*(?:a|an)[^,]+,\s*(?:and|with)\s*([^,]+),?\s*(?:a|an|residing)/i);
      const parties = partiesMatch ? [partiesMatch[1].trim(), partiesMatch[2].trim()] : [];
      
      // Extract date using regex
      const dateMatch = contractText.match(/(?:dated|made|entered into|as of|effective)\s*(?:on|as of)?\s*(?:the)?\s*(\w+\s+\d{1,2}(?:st|nd|rd|th)?,?\s*\d{4}|\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}-\d{1,2}-\d{4})/i);
      const effectiveDate = dateMatch ? dateMatch[1] : '';
      
      // Extract duration using regex
      const durationMatch = contractText.match(/(?:term|period)\s*(?:of|shall be|will be|is)\s*(?:the|this|a)?\s*(?:agreement|contract)?\s*(?:shall be|will be|is)?\s*(?:for)?\s*(?:a|an)?\s*(?:initial)?\s*(?:period of)?\s*(\d+)\s*(day|days|month|months|year|years)/i);
      const duration = durationMatch ? `${durationMatch[1]} ${durationMatch[2]}` : '';
      
      // Generate an overview based on identified contract type
      let overview = '';
      if (isSoftwareDevelopment) {
        overview = 'This is a software development agreement where the Developer agrees to provide software development services to the Client as described in Statements of Work. It covers scope of services, compensation, intellectual property rights, confidentiality, warranties, and termination provisions.';
      } else if (isEmployment) {
        overview = 'This is an employment agreement detailing the terms and conditions of employment. It covers job responsibilities, compensation, benefits, confidentiality, termination conditions, and post-employment restrictions.';
      } else if (isLease) {
        overview = 'This is a commercial lease agreement where the Landlord leases premises to the Tenant. It covers rent payments, security deposit, term length, maintenance responsibilities, insurance requirements, and default conditions.';
      } else if (isNDA) {
        overview = 'This is a non-disclosure agreement to protect confidential information shared between the parties. It defines confidential information, outlines obligations of the receiving party, specifies term and termination conditions, and provides remedies for breaches.';
      } else {
        overview = 'This appears to be a general contractual agreement between two parties outlining their rights, obligations, and terms of their business relationship.';
      }
      
      return {
        contract_type: contractType,
        overview: overview,
        parties: parties,
        effective_date: effectiveDate,
        duration: duration
      };
    } catch (error) {
      console.error('Error generating summary:', error);
      throw new Error(`Failed to generate contract summary: ${error.message}`);
    }
  }
  
  /**
   * Extract key clauses from the contract using OpenAI API
   * @param {string} contractText - The contract text
   * @returns {Promise<Object>} The extracted clauses
   */
  async extractContractClauses(contractText) {
    try {
      console.log('Extracting key clauses...');
      
      // Prepare truncated text for API
      const truncatedText = this.truncateText(contractText, 12000);
      
      // In a real implementation, we would call an API
      // We'll simulate the API call with a delay
      await this.sleep(1000);
      
      // For this demo, we'll extract clauses using regex
      const clauses = {};
      
      // Match headings and their content
      const headingPattern = /(\d+\.\s*[A-Z][A-Z\s]+(?:\s*AND\s*[A-Z][A-Z\s]+)?)\s*\n([\s\S]*?)(?=\n\d+\.\s*[A-Z][A-Z\s]+|\n*$)/g;
      let match;
      
      while ((match = headingPattern.exec(contractText)) !== null) {
        const heading = match[1].trim();
        const content = match[2].trim();
        
        // Clean up the heading to create a more readable key
        const cleanHeading = heading.replace(/^\d+\.\s*/, '').trim();
        
        // Store the clause
        clauses[cleanHeading] = content;
      }
      
      // If no clauses were found via regex, try another approach with section numbers
      if (Object.keys(clauses).length === 0) {
        const sectionPattern = /(\d+(?:\.\d+)?\s+[A-Z][A-Za-z\s]+)\.?\s+((?:(?!\d+(?:\.\d+)?\s+[A-Z][A-Za-z\s]+).)+)/g;
        
        while ((match = sectionPattern.exec(contractText)) !== null) {
          const heading = match[1].trim();
          const content = match[2].trim();
          
          // Clean up the heading
          const cleanHeading = heading.replace(/^\d+(?:\.\d+)?\s+/, '').trim();
          
          // Store the clause
          clauses[cleanHeading] = content;
        }
      }
      
      return {
        key_clauses: clauses
      };
    } catch (error) {
      console.error('Error extracting clauses:', error);
      throw new Error(`Failed to extract contract clauses: ${error.message}`);
    }
  }
  
  /**
   * Extract dates from the contract text
   * @param {string} contractText - The contract text
   * @returns {Array<string>} Array of extracted dates
   */
  extractDates(contractText) {
    try {
      console.log('Extracting dates...');
      
      // Define regex patterns for various date formats
      const datePatterns = [
        // Format: Month Day, Year (January 1, 2025)
        /(?<=\s|^)(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(?:st|nd|rd|th)?,\s+\d{4}(?=\s|$|\.|\,|\;|\:|\'|\"|\))/gi,
        
        // Format: MM/DD/YYYY
        /(?<=\s|^)\d{1,2}\/\d{1,2}\/\d{4}(?=\s|$|\.|\,|\;|\:|\'|\"|\))/g,
        
        // Format: YYYY-MM-DD
        /(?<=\s|^)\d{4}-\d{2}-\d{2}(?=\s|$|\.|\,|\;|\:|\'|\"|\))/g,
        
        // Format: DD-MM-YYYY or DD.MM.YYYY
        /(?<=\s|^)\d{1,2}[\.-]\d{1,2}[\.-]\d{4}(?=\s|$|\.|\,|\;|\:|\'|\"|\))/g
      ];
      
      let dates = [];
      
      // Apply each pattern and collect matches
      for (const pattern of datePatterns) {
        const matches = contractText.match(pattern) || [];
        dates = [...dates, ...matches];
      }
      
      // Remove duplicates and sort
      dates = [...new Set(dates)];
      
      return dates;
    } catch (error) {
      console.error('Error extracting dates:', error);
      return [];
    }
  }
  
  /**
   * Extract monetary values from the contract text
   * @param {string} contractText - The contract text
   * @returns {Array<string>} Array of extracted monetary values
   */
  extractMonetaryValues(contractText) {
    try {
      console.log('Extracting monetary values...');
      
      // Define regex patterns for various monetary formats
      const moneyPatterns = [
        // Format: $X,XXX.XX or $X.XX
        /(?<=\s|^)\$\s*\d{1,3}(?:,\d{3})*(?:\.\d{2})?(?=\s|$|\.|\,|\;|\:|\'|\"|\))/g,
        
        // Format: X,XXX.XX dollars or X.XX dollars
        /(?<=\s|^)\d{1,3}(?:,\d{3})*(?:\.\d{2})?\s+dollars(?=\s|$|\.|\,|\;|\:|\'|\"|\))/gi,
        
        // Format: USD X,XXX.XX or USD X.XX
        /(?<=\s|^)USD\s*\d{1,3}(?:,\d{3})*(?:\.\d{2})?(?=\s|$|\.|\,|\;|\:|\'|\"|\))/gi,
        
        // Format: X,XXX.XX USD or X.XX USD
        /(?<=\s|^)\d{1,3}(?:,\d{3})*(?:\.\d{2})?\s+USD(?=\s|$|\.|\,|\;|\:|\'|\"|\))/gi
      ];
      
      let monetaryValues = [];
      
      // Apply each pattern and collect matches
      for (const pattern of moneyPatterns) {
        const matches = contractText.match(pattern) || [];
        monetaryValues = [...monetaryValues, ...matches];
      }
      
      // Remove duplicates
      monetaryValues = [...new Set(monetaryValues)];
      
      return monetaryValues;
    } catch (error) {
      console.error('Error extracting monetary values:', error);
      return [];
    }
  }
  
  /**
   * Truncate text to a specified length for API calls
   * @param {string} text - The text to truncate
   * @param {number} maxLength - Maximum length
   * @returns {string} Truncated text
   */
  truncateText(text, maxLength = 12000) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
  
  /**
   * Helper method to simulate async delay
   * @param {number} ms - Milliseconds to sleep
   * @returns {Promise} Promise that resolves after delay
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export the analyzer (for module integration)
window.contractAnalyzer = new ContractAnalyzer();

// If running in browser context with jQuery, add DOM ready handler
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
    console.log('Contract analyzer initialized');
    
    // Setup form submission if it exists
    $('#contract-upload-form').on('submit', async function(e) {
      e.preventDefault();
      
      const fileInput = document.getElementById('file-upload');
      const file = fileInput.files[0];
      
      if (!file) {
        showAlert('danger', 'Please select a file to analyze');
        return;
      }
      
      // Show loading state
      $('#submit-btn').prop('disabled', true)
        .html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Analyzing...');
      
      try {
        // In a real app, we'd upload the file to the server
        // For this demo, we'll simulate file reading and analysis
        const reader = new FileReader();
        
        reader.onload = async function(e) {
          const fileContent = e.target.result;
          
          try {
            // Analyze the contract
            const results = await window.contractAnalyzer.analyzeContract(fileContent, file.name);
            
            // Redirect to results page (in a real app)
            // window.location.href = '/results?id=' + results.id;
            
            // For demo, just show success
            showAlert('success', 'Contract analyzed successfully! Redirecting to results...');
            
            // Simulate redirect after delay
            setTimeout(() => {
              $('#submit-btn').prop('disabled', false).html('Analyze <i class="fas fa-upload ms-1"></i>');
            }, 1500);
          } catch (error) {
            showAlert('danger', `Analysis failed: ${error.message}`);
            $('#submit-btn').prop('disabled', false).html('Analyze <i class="fas fa-upload ms-1"></i>');
          }
        };
        
        reader.onerror = function() {
          showAlert('danger', 'Error reading file');
          $('#submit-btn').prop('disabled', false).html('Analyze <i class="fas fa-upload ms-1"></i>');
        };
        
        reader.readAsText(file);
      } catch (error) {
        showAlert('danger', `Error: ${error.message}`);
        $('#submit-btn').prop('disabled', false).html('Analyze <i class="fas fa-upload ms-1"></i>');
      }
    });
  });
  
  // Helper function to show alerts
  function showAlert(type, message) {
    const alertHtml = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    
    $('.alert-container').empty().append(alertHtml);
  }
}