// Transform asset path function
function transformAssetPath(path) {
    if (!path) return path;
    if (path.startsWith('http:') || path.startsWith('https:') || path.startsWith('../../../../')) return path;
    let cleanPath = path;
    if (cleanPath.startsWith('/')) cleanPath = cleanPath.substring(1);
    return cleanPath.startsWith('assets/') ? '../../../../' + cleanPath : cleanPath;
}

// Windows XP File Explorer functionality
document.addEventListener('DOMContentLoaded', async function() {
    // Load content from info.json
    let info = null;
    try {
        const response = await fetch('./info.json');
        info = await response.json();
        console.log('Info loaded successfully:', info);
    } catch (error) {
        console.error('Failed to load info.json', error);
    }

    // Populate sidebar content
    if (info) {
        // Populate Social Links
        const socialLinksCard = document.getElementById('social-links-card');
        if (socialLinksCard && info.socials) {
            const socialContent = socialLinksCard.querySelector('.left-panel__card__content-inner');
            socialContent.innerHTML = '';
            console.log('Populating social links:', info.socials.length, 'items');
            info.socials.forEach(social => {
                if (social.url) {
                    const link = document.createElement('a');
                    link.href = social.url;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.className = 'left-panel__card__row';
                    
                    const img = document.createElement('img');
                    img.className = 'left-panel__card__img';
                    img.src = transformAssetPath(social.icon);
                    img.alt = social.name;
                    img.onerror = () => console.error('Failed to load social icon:', transformAssetPath(social.icon));
                    img.onload = () => console.log('Successfully loaded social icon:', transformAssetPath(social.icon));
                    console.log('Social icon path:', social.icon, '->', transformAssetPath(social.icon));
                    
                    const span = document.createElement('span');
                    span.className = 'left-panel__card__text';
                    span.textContent = social.name;
                    
                    link.appendChild(img);
                    link.appendChild(span);
                    socialContent.appendChild(link);
                }
            });
            // Expand the social links card by default
            expandCard(socialLinksCard);
        }

        // Populate Skills
        const skillsCard = document.getElementById('skills-card');
        if (skillsCard && info.about && info.about.skills) {
            const skillsContent = skillsCard.querySelector('.left-panel__card__content-inner');
            skillsContent.innerHTML = '';
            console.log('Populating skills:', info.about.skills.length, 'items');
            info.about.skills.forEach((skill, index) => {
                const row = document.createElement('div');
                row.className = 'left-panel__card__row';
                
                const img = document.createElement('img');
                img.className = 'left-panel__card__img';
                img.alt = skill;
                img.src = transformAssetPath(info.about.skillsIcons[index] || '');
                img.onerror = () => console.error('Failed to load skill icon:', transformAssetPath(info.about.skillsIcons[index] || ''));
                img.onload = () => console.log('Successfully loaded skill icon:', transformAssetPath(info.about.skillsIcons[index] || ''));
                console.log('Skill icon path:', info.about.skillsIcons[index], '->', transformAssetPath(info.about.skillsIcons[index] || ''));
                
                const span = document.createElement('span');
                span.className = 'left-panel__card__text';
                span.textContent = skill;
                
                row.appendChild(img);
                row.appendChild(span);
                skillsContent.appendChild(row);
            });
            // Expand the skills card by default
            expandCard(skillsCard);
        }

        // Populate Software
        const softwareCard = document.getElementById('software-card');
        if (softwareCard && info.about && info.about.software) {
            const softwareContent = softwareCard.querySelector('.left-panel__card__content-inner');
            softwareContent.innerHTML = '';
            console.log('Populating software:', info.about.software.length, 'items');
            info.about.software.forEach((software, index) => {
                const row = document.createElement('div');
                row.className = 'left-panel__card__row';
                
                const img = document.createElement('img');
                img.className = 'left-panel__card__img';
                img.alt = software;
                img.src = transformAssetPath(info.about.softwareIcons[index] || '');
                img.onerror = () => console.error('Failed to load software icon:', transformAssetPath(info.about.softwareIcons[index] || ''));
                img.onload = () => console.log('Successfully loaded software icon:', transformAssetPath(info.about.softwareIcons[index] || ''));
                console.log('Software icon path:', info.about.softwareIcons[index], '->', transformAssetPath(info.about.softwareIcons[index] || ''));
                
                const span = document.createElement('span');
                span.className = 'left-panel__card__text';
                span.textContent = software;
                
                row.appendChild(img);
                row.appendChild(span);
                softwareContent.appendChild(row);
            });
            // Expand the software card by default
            expandCard(softwareCard);
        }
    }

    // Initialize cards in collapsed state
    const socialLinksCard = document.getElementById('social-links-card');
    const skillsCard = document.getElementById('skills-card');
    const softwareCard = document.getElementById('software-card');

    // Folder click handlers
    const folderItems = document.querySelectorAll('.folder-item');
    
    folderItems.forEach(folder => {
        folder.addEventListener('click', function() {
            const folderName = this.getAttribute('data-folder');
            const folderLabel = this.querySelector('.folder-label').textContent;
            
            // Create folder opening effect
            this.style.borderColor = '#316ac9';
            this.style.backgroundColor = 'rgba(49,106,197,0.2)';
            
            // Simulate Windows XP folder opening
            setTimeout(() => {
                openFolder(folderName, folderLabel);
                // Reset hover state
                this.style.borderColor = '';
                this.style.backgroundColor = '';
            }, 150);
        });
        
        // Windows XP-style hover effects
        folder.addEventListener('mouseenter', function() {
            this.style.borderColor = '#316ac9';
            this.style.backgroundColor = 'rgba(49,106,197,0.1)';
            this.style.boxShadow = '0 0 0 1px rgba(49,106,197,0.3)';
        });
        
        folder.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });
    
    // Left panel accordion functionality
    const cardHeaders = document.querySelectorAll('.left-panel__card__header');
    
    cardHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const card = this.parentElement;
            toggleCard(card);
        });
    });
    
    // Other Places navigation
    const otherPlacesItems = document.querySelectorAll('.left-panel__card__content__item[data-program]');
    
    otherPlacesItems.forEach(item => {
        item.addEventListener('click', function() {
            const programName = this.getAttribute('data-program');
            openProgram(programName);
        });
    });
});

// Function to open folder in new XP-style tab
function openFolder(folderName, folderLabel) {
    // Use the event bus to open the folder as a new program
    if (window.parent && window.parent.eventBus && window.parent.EVENTS) {
        window.parent.eventBus.publish(window.parent.EVENTS.PROGRAM_OPEN, { programName: folderName });
    }
    
    // Windows XP-style status bar update
    updateStatusBar(`Opening ${folderLabel}...`);
}

// Function to open other programs
function openProgram(programName) {
    // Use the event bus to open programs
    if (window.parent && window.parent.eventBus && window.parent.EVENTS) {
        window.parent.eventBus.publish(window.parent.EVENTS.PROGRAM_OPEN, { programName: programName });
    }
}

// Update status bar with Windows XP-style message
function updateStatusBar(message) {
    // This will be handled by the parent window's status bar
    window.parent.postMessage({
        type: 'updateStatusBar',
        message: message
    }, '*');
}

// Initialize status bar with default message
document.addEventListener('DOMContentLoaded', function() {
    updateStatusBar('4 objects | Contains competitor benchmarking, market sizing, pricing strategy, and opportunity mapping');
});

// Accordion functionality functions
function expandCard(card) {
    if (!card) return;
    card.classList.remove('collapsed');
    const arrow = card.querySelector('.left-panel__card__header__img');
    if (arrow) {
        if (card.classList.contains('left-panel__card--social')) {
            arrow.src = transformAssetPath('../../../assets/apps/about/pullup-alt.webp');
        } else {
            arrow.src = transformAssetPath('../../../assets/apps/about/pullup.webp');
        }
    }
}

function toggleCard(card) {
    if (!card) return;
    card.classList.toggle('collapsed');
    const isCollapsed = card.classList.contains('collapsed');
    const arrow = card.querySelector('.left-panel__card__header__img');
    if (arrow) {
        if (card.classList.contains('left-panel__card--social')) {
            arrow.src = isCollapsed ? transformAssetPath('../../../assets/apps/about/pulldown-alt.webp') : transformAssetPath('../../../assets/apps/about/pullup-alt.webp');
        } else {
            arrow.src = isCollapsed ? transformAssetPath('../../../assets/apps/about/pulldown.webp') : transformAssetPath('../../../assets/apps/about/pullup.webp');
        }
    }
} 