// Customer Research 2 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Handle folder clicks
    const folderItems = document.querySelectorAll('.folder-item');
    
    folderItems.forEach(item => {
        item.addEventListener('click', function() {
            const folderName = this.getAttribute('data-folder');
            if (folderName) {
                // Open the folder/app
                window.parent.postMessage({
                    type: 'openApp',
                    appName: folderName
                }, '*');
            }
        });
    });

    // Handle social links card toggle
    const socialLinksCard = document.getElementById('social-links-card');
    const socialLinksHeader = socialLinksCard.querySelector('.left-panel__card__header');
    
    socialLinksHeader.addEventListener('click', function() {
        socialLinksCard.classList.toggle('collapsed');
    });
}); 