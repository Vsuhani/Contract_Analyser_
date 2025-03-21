document.addEventListener('DOMContentLoaded', function() {
    // Get file input element
    const fileInput = document.getElementById('file-upload');
    
    if (fileInput) {
        // Add event listener for file selection
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const fileExtension = fileName.split('.').pop().toLowerCase();
                
                // Validate file extension
                if (!['pdf', 'docx'].includes(fileExtension)) {
                    alert('Please select a PDF or DOCX file.');
                    fileInput.value = '';  // Clear the file input
                }
            }
        });
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add animation to feature icons on hover
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const iconElement = this.querySelector('i');
            if (iconElement) {
                iconElement.style.transform = 'scale(1.2)';
                iconElement.style.transition = 'transform 0.3s ease';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const iconElement = this.querySelector('i');
            if (iconElement) {
                iconElement.style.transform = 'scale(1)';
            }
        });
    });
    
    // Handle the loading state when the form is submitted
    const analyzeForm = document.querySelector('form');
    if (analyzeForm) {
        analyzeForm.addEventListener('submit', function(e) {
            // Check if file is selected
            if (fileInput && fileInput.files.length === 0) {
                e.preventDefault();
                alert('Please select a file to analyze.');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
                submitButton.disabled = true;
            }
        });
    }
});
