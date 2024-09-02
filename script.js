// Add event listener for scroll event
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Check if the page is scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});