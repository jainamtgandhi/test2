// Contact form functionality
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const fromInput = document.getElementById('contact-from');
const subjectInput = document.getElementById('contact-subject');
const messageTextarea = document.getElementById('contact-message');

// Load contact info from info.json
async function loadContactInfo() {
    try {
        const response = await fetch('../../../info.json');
        const data = await response.json();
        
        if (data.contact) {
            const contactTo = document.getElementById('contact-to');
            if (contactTo) {
                contactTo.value = `${data.contact.name} <${data.contact.email}>`;
            }
        }
    } catch (error) {
        console.error('Error loading contact info:', error);
    }
}

// Handle form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(contactForm);
        
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showStatus('Sorry, there was an error sending your message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showStatus('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Show status message
function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `status-message ${type}`;
    formStatus.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// Notify parent window of form state changes
function notifyFormState() {
    const hasValue = fromInput.value.trim() || 
                    subjectInput.value.trim() || 
                    messageTextarea.value.trim();
    
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({
            type: 'contactFormState',
            hasValue: !!hasValue,
            windowId: window.name
        }, '*');
    }
}

// Add input event listeners
[fromInput, subjectInput, messageTextarea].forEach(input => {
    if (input) {
        input.addEventListener('input', notifyFormState);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadContactInfo();
    notifyFormState();
});

// Handle parent window messages
window.addEventListener('message', function(event) {
    if (event.data && typeof event.data === 'object') {
        if (event.data.command === 'newMessage' || event.data.action === 'newMessage') {
            contactForm.reset();
            notifyFormState();
        }
    }
});

// Prevent zoom on mobile
document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
document.addEventListener('gesturechange', e => e.preventDefault(), { passive: false });
document.addEventListener('gestureend', e => e.preventDefault(), { passive: false });

// Prevent double tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Prevent multi-touch zoom
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent scroll zoom
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey || event.target === document.body || event.target === document.documentElement) {
        event.preventDefault();
    }
}, { passive: false });