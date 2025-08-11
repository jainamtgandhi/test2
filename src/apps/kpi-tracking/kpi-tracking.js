// KPI Tracking App
document.addEventListener('DOMContentLoaded', function() {
    const kpitrackingImage = document.getElementById('kpitrackingImage');
    const appRoot = document.getElementById('appRoot');
    
    if (!kpitrackingImage || !appRoot) {
        console.error('Required elements not found');
        return;
    }

    // Handle zoom functionality
    let isZoomed = false;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    kpitrackingImage.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (isDragging) {
            isDragging = false;
            return;
        }

        if (isZoomed) {
            // Zoom out
            kpitrackingImage.classList.remove('zoomed');
            appRoot.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        } else {
            // Zoom in
            kpitrackingImage.classList.add('zoomed');
            
            // Center on click position
            const rect = kpitrackingImage.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const scaleX = kpitrackingImage.naturalWidth / rect.width;
            const scaleY = kpitrackingImage.naturalHeight / rect.height;
            
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
    kpitrackingImage.addEventListener('mousedown', function(e) {
        if (!isZoomed) return;
        
        isDragging = true;
        kpitrackingImage.classList.add('dragging');
        
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
            kpitrackingImage.classList.remove('dragging');
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
            const rect = kpitrackingImage.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const scaleX = kpitrackingImage.naturalWidth / rect.width;
            const scaleY = kpitrackingImage.naturalHeight / rect.height;
            
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
});