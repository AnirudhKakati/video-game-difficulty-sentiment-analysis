document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main');
    let lastScrollPosition = 0;
    const backgroundSwitchThreshold = 1000; // Adjust this value to change when the background switches

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        // Header shrinking effect
        if (currentScrollPosition > lastScrollPosition) {
            header.style.transform = 'translateY(-50%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollPosition = currentScrollPosition;

        // Fade out effect for main content
        const opacity = Math.max(0, 1 - currentScrollPosition / 1000);
        const scale = Math.max(0.5, 1 - currentScrollPosition / 2000);
        mainContent.style.opacity = opacity;
        mainContent.style.transform = `scale(${scale})`;

        // Switch background image
        if (currentScrollPosition > backgroundSwitchThreshold) {
            document.body.classList.add('alternate-background');
        } else {
            document.body.classList.remove('alternate-background');
        }
    });
});
