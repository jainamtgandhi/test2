// Future of Supply Chain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible cards
    initializeCollapsibleCards();
    
    // Add smooth scrolling for better UX
    addSmoothScrolling();
    
    // Add hover effects for feature items
    addFeatureHoverEffects();
});

function initializeCollapsibleCards() {
    const cards = document.querySelectorAll('.left-panel__card');
    
    cards.forEach(card => {
        const header = card.querySelector('.left-panel__card__header');
        const content = card.querySelector('.left-panel__card__content');
        
        if (header && content) {
            header.addEventListener('click', function() {
                // Toggle collapsed state
                card.classList.toggle('collapsed');
                
                // Animate content height
                if (card.classList.contains('collapsed')) {
                    content.style.maxHeight = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                
                // Add smooth transition
                content.style.transition = 'max-height 0.3s ease';
            });
        }
    });
}

function addSmoothScrolling() {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addFeatureHoverEffects() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add intersection observer for animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content sections
    const contentSections = document.querySelectorAll('.content-section, .feature-item');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    addScrollAnimations();
});

// Add responsive behavior for mobile
function handleMobileResponsiveness() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Auto-expand first card on mobile for better UX
        const firstCard = document.querySelector('.left-panel__card');
        if (firstCard) {
            firstCard.classList.remove('collapsed');
            const content = firstCard.querySelector('.left-panel__card__content');
            if (content) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    handleMobileResponsiveness();
});

// Initialize mobile responsiveness
handleMobileResponsiveness();
