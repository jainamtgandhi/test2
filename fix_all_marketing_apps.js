const fs = require('fs');
const path = require('path');

// List of all marketing apps that need fixing (excluding resume and other non-marketing apps)
const marketingApps = [
    'analytics-placeholder',
    'content-marketing-placeholder',
    'brand-storytelling',
    'battlecards-placeholder',
    'campaign-timelines-placeholder',
    'email-templates-placeholder',
    'campaign-execution',
    'channel-strategy-placeholder',
    'email-campaigns-placeholder',
    'competitor-benchmarking',
    'case-studies-placeholder',
    'cross-functional-alignment',
    'launch-planning',
    'one-pagers-placeholder',
    'market-sizing',
    'launch-plans-placeholder',
    'go-to-market-placeholder',
    'messaging-tests-placeholder',
    'kpi-tracking',
    'paid-ads-placeholder',
    'pain-point-identification-needs-analysis',
    'pricing-strategy',
    'insight-synthesis-actionable-recommendations',
    'market-sizing-placeholder',
    'messaging-frameworks-placeholder',
    'opportunity-mapping',
    'message-testing',
    'value-proposition',
    'qualitative-quantitative-research',
    'sales-decks-placeholder',
    'tone-voice-placeholder',
    'social-media-placeholder',
    'seo-placeholder'
];

// Function to update HTML file
function updateHtmlFile(appName) {
    const htmlPath = `src/apps/${appName}/${appName}.html`;
    
    if (!fs.existsSync(htmlPath)) {
        console.log(`HTML file not found for ${appName}`);
        return false;
    }
    
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Replace resume-specific elements with app-specific ones
    const appSpecificId = `${appName.replace(/-/g, '')}Image`;
    const appSpecificClass = `${appName.replace(/-/g, '')}-image`;
    
    content = content.replace(/id="resumeImage"/g, `id="${appSpecificId}"`);
    content = content.replace(/class="resume-image"/g, `class="${appSpecificClass}"`);
    
    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log(`✅ Updated HTML for ${appName}`);
    return true;
}

// Function to update CSS file
function updateCssFile(appName) {
    const cssPath = `src/apps/${appName}/${appName}.css`;
    
    if (!fs.existsSync(cssPath)) {
        console.log(`CSS file not found for ${appName}`);
        return false;
    }
    
    let content = fs.readFileSync(cssPath, 'utf8');
    
    // Replace resume-specific classes with app-specific ones
    const appSpecificClass = `${appName.replace(/-/g, '')}-image`;
    
    content = content.replace(/\.resume-image/g, `.${appSpecificClass}`);
    
    fs.writeFileSync(cssPath, content, 'utf8');
    console.log(`✅ Updated CSS for ${appName}`);
    return true;
}

// Function to update JavaScript file
function updateJsFile(appName) {
    const jsPath = `src/apps/${appName}/${appName}.js`;
    
    if (!fs.existsSync(jsPath)) {
        console.log(`JS file not found for ${appName}`);
        return false;
    }
    
    // Create new app-specific JavaScript
    const appSpecificId = `${appName.replace(/-/g, '')}Image`;
    const appSpecificClass = `${appName.replace(/-/g, '')}-image`;
    const appTitle = appName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const newJsContent = `// ${appTitle} App
document.addEventListener('DOMContentLoaded', function() {
    const ${appSpecificId} = document.getElementById('${appSpecificId}');
    const appRoot = document.getElementById('appRoot');
    
    if (!${appSpecificId} || !appRoot) {
        console.error('Required elements not found');
        return;
    }

    // Handle zoom functionality
    let isZoomed = false;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    ${appSpecificId}.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (isDragging) {
            isDragging = false;
            return;
        }

        if (isZoomed) {
            // Zoom out
            ${appSpecificId}.classList.remove('zoomed');
            appRoot.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        } else {
            // Zoom in
            ${appSpecificId}.classList.add('zoomed');
            
            // Center on click position
            const rect = ${appSpecificId}.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const scaleX = ${appSpecificId}.naturalWidth / rect.width;
            const scaleY = ${appSpecificId}.naturalHeight / rect.height;
            
            const scrollX = clickX * scaleX - appRoot.clientWidth / 2;
            const scrollY = clickY * scaleY - appRoot.clientHeight / 2;
            
            requestAnimationFrame(() => {
                appRoot.scrollTo({
                    left: Math.max(0, scrollX),
                    top: Math.max(0, scrollY),
                    behavior: 'smooth'
                });
            });
        }
        
        isZoomed = !isZoomed;
        
        // Notify parent window
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'imageZoomed' }, '*');
        }
    });

    // Handle drag functionality when zoomed
    ${appSpecificId}.addEventListener('mousedown', function(e) {
        if (!isZoomed) return;
        
        isDragging = true;
        ${appSpecificId}.classList.add('dragging');
        
        startX = e.pageX - appRoot.offsetLeft;
        startY = e.pageY - appRoot.offsetTop;
        scrollLeft = appRoot.scrollLeft;
        scrollTop = appRoot.scrollTop;
        
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        
        const x = e.pageX - appRoot.offsetLeft;
        const y = e.pageY - appRoot.offsetTop;
        
        const walkX = (x - startX) * 2;
        const walkY = (y - startY) * 2;
        
        appRoot.scrollLeft = scrollLeft - walkX;
        appRoot.scrollTop = scrollTop - walkY;
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            ${appSpecificId}.classList.remove('dragging');
        }
    });

    // Handle touch events for mobile
    let lastTouchEnd = 0;
    
    document.addEventListener('touchend', function(e) {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Prevent context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (isZoomed) {
            // Re-center the image when window is resized
            const rect = ${appSpecificId}.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const scaleX = ${appSpecificId}.naturalWidth / rect.width;
            const scaleY = ${appSpecificId}.naturalHeight / rect.height;
            
            const scrollX = centerX * scaleX - appRoot.clientWidth / 2;
            const scrollY = centerY * scaleY - appRoot.clientHeight / 2;
            
            appRoot.scrollTo({
                left: Math.max(0, scrollX),
                top: Math.max(0, scrollY),
                behavior: 'auto'
            });
        }
    });

    // Handle maximize/restore messages from parent
    window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'maximize') {
            appRoot.classList.add('maximized-mode');
        } else if (e.data && e.data.type === 'restore') {
            appRoot.classList.remove('maximized-mode');
        }
    });

    // Notify parent when image is clicked
    document.addEventListener('click', function() {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'imageClicked' }, '*');
        }
    });
});`;
    
    fs.writeFileSync(jsPath, newJsContent, 'utf8');
    console.log(`✅ Updated JavaScript for ${appName}`);
    return true;
}

// Main function to fix all apps
function fixAllMarketingApps() {
    console.log('🔧 Starting to fix all marketing apps...\n');
    
    let successCount = 0;
    let totalCount = 0;
    
    marketingApps.forEach(appName => {
        console.log(`\n📁 Processing ${appName}...`);
        totalCount++;
        
        let appSuccess = true;
        
        // Update HTML
        if (!updateHtmlFile(appName)) {
            appSuccess = false;
        }
        
        // Update CSS
        if (!updateCssFile(appName)) {
            appSuccess = false;
        }
        
        // Update JavaScript
        if (!updateJsFile(appName)) {
            appSuccess = false;
        }
        
        if (appSuccess) {
            successCount++;
            console.log(`✅ Successfully fixed ${appName}`);
        } else {
            console.log(`❌ Failed to fix ${appName}`);
        }
    });
    
    console.log(`\n🎉 Fix completed!`);
    console.log(`✅ Successfully fixed: ${successCount}/${totalCount} apps`);
    
    if (successCount < totalCount) {
        console.log(`❌ Failed to fix: ${totalCount - successCount} apps`);
    }
}

// Run the fix
fixAllMarketingApps();
