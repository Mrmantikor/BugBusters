document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.addEventListener('error', () => {
                            console.warn(`Failed to load image: ${img.dataset.src}`);
                        }, { once: true });
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '100px' 
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        lazyImages.forEach(img => {
            if (img.dataset.src) img.src = img.dataset.src;
        });
    }
});