// Transform asset path function
function transformAssetPath(path) {
    if (!path) return path;
    if (path.startsWith('http:') || path.startsWith('https:') || path.startsWith('../../../')) return path;
    let cleanPath = path;
    if (cleanPath.startsWith('/')) cleanPath = cleanPath.substring(1);
    return cleanPath.startsWith('assets/') ? '../../../' + cleanPath : cleanPath;
}

// Handle window messages for maximize/restore
window.addEventListener('message', function(event) {
    const appRoot = document.getElementById('appRoot');
    if (appRoot) {
        if (event.data && event.data.type === 'maximize-window') {
            appRoot.classList.add('maximized-mode');
        } else if (event.data && event.data.type === 'restore-window') {
            appRoot.classList.remove('maximized-mode');
        }
    }
});

// Initialize zoom functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    const campaignexecutionImage = document.getElementById('campaignexecutionImage');
    const appRoot = document.getElementById('appRoot');
    
    let info = null;
    try {
        const response = await fetch('../../../info.json');
        info = await response.json();
    } catch (error) {
        console.error('Failed to load info.json', error);
    }

    function initializeZoom() {
        let isDragging = false;
        let startX, startY, scrollLeft, scrollTop;

        // Prevent context menu
        campaignexecutionImage.addEventListener('contextmenu', e => e.preventDefault());

        // Handle click to zoom
        campaignexecutionImage.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (isDragging) {
                isDragging = false;
                return;
            }

            if (campaignexecutionImage.classList.contains('zoomed')) {
                // Zoom out
                campaignexecutionImage.classList.remove('zoomed');
                appRoot.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            } else {
                // Zoom in
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const width = campaignexecutionImage.clientWidth;
                const height = campaignexecutionImage.clientHeight;

                if (width === 0 || height === 0) return;

                campaignexecutionImage.classList.add('zoomed');
                
                requestAnimationFrame(() => {
                    const scaleX = campaignexecutionImage.scrollWidth / width;
                    const scaleY = campaignexecutionImage.scrollHeight / height;
                    const centerX = x * scaleX;
                    const centerY = y * scaleY;
                    const containerWidth = appRoot.clientWidth;
                    const containerHeight = appRoot.clientHeight;

                    let scrollX = centerX - containerWidth / 2;
                    let scrollY = centerY - containerHeight / 2;

                    scrollX = Math.max(0, Math.min(scrollX, appRoot.scrollWidth - containerWidth));
                    scrollY = Math.max(0, Math.min(scrollY, appRoot.scrollHeight - containerHeight));

                    appRoot.scrollTo({
                        left: scrollX,
                        top: scrollY,
                        behavior: 'smooth'
                    });
                });
            }

            // Notify parent window
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'image-zoomed' }, '*');
            }
        });

        // Handle drag functionality when zoomed
        campaignexecutionImage.addEventListener('mousedown', function(e) {
            if (campaignexecutionImage.classList.contains('zoomed')) {
                isDragging = true;
                startX = e.pageX;
                startY = e.pageY;
                scrollLeft = appRoot.scrollLeft;
                scrollTop = appRoot.scrollTop;
                campaignexecutionImage.classList.add('dragging');
                e.preventDefault();
            }
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            
            const x = e.pageX - startX;
            const y = e.pageY - startY;
            appRoot.scrollLeft = scrollLeft - x;
            appRoot.scrollTop = scrollTop - y;
        });

        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                campaignexecutionImage.classList.remove('dragging');
            }
        });

        // Handle touch events for mobile
        campaignexecutionImage.addEventListener('touchstart', function(e) {
            if (campaignexecutionImage.classList.contains('zoomed')) {
                isDragging = true;
                const touch = e.touches[0];
                startX = touch.pageX;
                startY = touch.pageY;
                scrollLeft = appRoot.scrollLeft;
                scrollTop = appRoot.scrollTop;
                campaignexecutionImage.classList.add('dragging');
            }
        });

        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            
            const touch = e.touches[0];
            const x = touch.pageX - startX;
            const y = touch.pageY - startY;
            appRoot.scrollLeft = scrollLeft - x;
            appRoot.scrollTop = scrollTop - y;
        });

        document.addEventListener('touchend', function() {
            if (isDragging) {
                isDragging = false;
                campaignexecutionImage.classList.remove('dragging');
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (campaignexecutionImage.classList.contains('zoomed')) {
                appRoot.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            }
        });
    }

    // Initialize zoom functionality
    if (info && info.campaignExecution) {
        if (campaignexecutionImage) {
            campaignexecutionImage.src = transformAssetPath(info.campaignExecution.webp);
        }
        if (campaignexecutionImage.complete && campaignexecutionImage.naturalWidth !== 0) {
            initializeZoom();
        } else {
            campaignexecutionImage.addEventListener('load', initializeZoom);
        }
    }
});

// Handle window close
document.addEventListener('beforeunload', function() {
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'window-closing' }, '*');
    }
});

// Prevent zoom gestures
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('gestureend', function(e) {
    e.preventDefault();
}, { passive: false });

// Prevent multi-touch zoom
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent double tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Prevent scroll zoom
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey || event.target === document.body || event.target === document.documentElement) {
        event.preventDefault();
    }
}, { passive: false });