// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animations on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('resize', checkFade);
window.addEventListener('load', checkFade);

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Add other JavaScript functionality here
