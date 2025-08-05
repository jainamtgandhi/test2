// KPI Tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeImage = document.getElementById('resumeImage');
    
    if (resumeImage) {
        // Add zoom functionality
        resumeImage.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
        
        // Add drag functionality
        let isDragging = false;
        let startX, startY, translateX = 0, translateY = 0;
        
        resumeImage.addEventListener('mousedown', function(e) {
            if (this.classList.contains('zoomed')) {
                isDragging = true;
                this.classList.add('dragging');
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
            }
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                translateX = e.clientX - startX;
                translateY = e.clientY - startY;
                resumeImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
            }
        });
        
        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                resumeImage.classList.remove('dragging');
            }
        });
    }
}); 