import os
import logging
from flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.utils import secure_filename
import tempfile

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

# Configure upload settings
ALLOWED_EXTENSIONS = {'pdf', 'docx'}
TEMP_FOLDER = tempfile.gettempdir()

# Import application modules
from modules.document_processor import extract_text_from_file
from modules.text_summarizer import summarize_contract
from modules.clause_extractor import extract_clauses
from modules.result_formatter import format_results

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if a file was uploaded
    if 'file' not in request.files:
        flash('No file part', 'error')
        return redirect(request.url)
    
    file = request.files['file']
    
    # Check if file is empty
    if file.filename == '':
        flash('No selected file', 'error')
        return redirect(request.url)
    
    # Check if file has allowed extension
    if not allowed_file(file.filename):
        flash('File type not allowed. Please upload PDF or DOCX files.', 'error')
        return redirect(request.url)
    
    try:
        # Save file temporarily
        filename = secure_filename(file.filename)
        temp_path = os.path.join(TEMP_FOLDER, filename)
        file.save(temp_path)
        
        # Extract text from file
        logger.debug(f"Extracting text from {filename}")
        text = extract_text_from_file(temp_path)
        
        if not text:
            flash('Could not extract text from the file. Please check the file content.', 'error')
            return redirect(request.url)
        
        # Summarize the contract
        logger.debug("Summarizing contract")
        summary = summarize_contract(text)
        
        # Extract key clauses
        logger.debug("Extracting clauses")
        clauses = extract_clauses(text)
        
        # Format results
        logger.debug("Formatting results")
        results = format_results(text, summary, clauses)
        
        # Store results in session for display
        session['results'] = results
        session['filename'] = filename
        
        # Remove temporary file
        os.remove(temp_path)
        
        return redirect(url_for('results'))
    
    except Exception as e:
        logger.error(f"Error processing file: {str(e)}", exc_info=True)
        flash(f'Error processing file: {str(e)}', 'error')
        return redirect(request.url)

@app.route('/results')
def results():
    if 'results' not in session:
        flash('No analysis results found. Please upload a document first.', 'warning')
        return redirect(url_for('index'))
    
    return render_template('results.html', 
                           results=session['results'], 
                           filename=session.get('filename', 'document'))

@app.errorhandler(413)
def request_entity_too_large(error):
    flash('File too large to upload. Please try a smaller file.', 'error')
    return redirect(url_for('index'))

@app.errorhandler(500)
def internal_server_error(error):
    flash('An unexpected error occurred. Please try again later.', 'error')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
