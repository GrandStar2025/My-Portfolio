// Navigation
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show menu
navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Hide menu
navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Hide menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Float chat functionality
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatClose = document.getElementById('chat-close');
const chatMessage = document.getElementById('chat-message');

chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

function sendWhatsAppMessage() {
    const message = chatMessage.value.trim();
    if (!message) {
        alert('Please enter a message before sending.');
        return;
    }

    const formattedMessage = `Send from Website:\n\n${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918210898782&text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
    chatMessage.value = '';
    chatContainer.classList.remove('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Card hover effects
document.querySelectorAll('.app-card, .game-card, .interest-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});