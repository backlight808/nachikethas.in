document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Header Blur Border on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. High-Performance Intersection Observer for Minimal Scroll Fades
    const fadeSections = document.querySelectorAll('.fade-in');
    
    const fillOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animates once and steps out of the loop
        });
    }, fillOptions);

    fadeSections.forEach(section => {
        appearanceObserver.observe(section);
    });
});