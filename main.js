document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Bascule la classe pour afficher/masquer le menu
            nav.classList.toggle('open');
            
            // Gestion Accessibilité (ARIA)
            const isExpanded = nav.classList.contains('open');
            burger.setAttribute('aria-expanded', isExpanded);
        });
    }
});