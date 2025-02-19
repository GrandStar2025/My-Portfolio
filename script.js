// Smooth scrolling function for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Project scroll functionality
function scrollProjects(direction) {
    const container = document.querySelector('.projects-grid');
    const scrollAmount = 400; // Adjust this value to control scroll distance
    
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
});

// Add hover effects for interactive elements
document.querySelectorAll('.service-card, .project-card, .download-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Handle button clicks for downloads
document.querySelectorAll('.download-card button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Add download functionality here
        alert('Download started!');
    });
});

// Add scroll progress indicator
window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // You can add a progress bar here if needed
});

// Handle install button clicks
document.querySelectorAll('.install-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add installation logic here
        alert('Starting download...');
    });
});

// Smooth scrolling for screenshots
document.querySelectorAll('.screenshots-container').forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});

// Dark mode toggle ka functionality
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode button ko select karo
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check karo ki pehle se dark mode hai ya nahi
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    
    // Dark mode button pe click karne pe kya hoga
    themeToggle.addEventListener('click', function() {
        // Current theme check karo
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Dark se light mode mai switch karo
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        } else {
            // Light se dark mode mai switch karo
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    });
});

// Projects ke horizontal scroll ka functionality
document.addEventListener('DOMContentLoaded', function() {
    // Scroll buttons ko select karo
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Left button pe click karne pe
    scrollLeftBtn.addEventListener('click', function() {
        // Smooth scroll left
        projectsGrid.scrollBy({
            left: -400,  // 400px left scroll karo
            behavior: 'smooth'  // Smooth animation ke sath
        });
    });
    
    // Right button pe click karne pe
    scrollRightBtn.addEventListener('click', function() {
        // Smooth scroll right
        projectsGrid.scrollBy({
            left: 400,   // 400px right scroll karo
            behavior: 'smooth'  // Smooth animation ke sath
        });
    });
});

// Scroll animations ke liye - jab elements viewport mai aaye tab animate karo
const observerOptions = {
    root: null,  // Viewport ko observe karo
    threshold: 0.1  // 10% element dikhne pe trigger karo
};

// Animation observer create karo
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // Agar element viewport mai aa gaya hai
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // visible class add karo
            observer.unobserve(entry.target);  // Ab isko observe karna band karo
        }
    });
}, observerOptions);

// Saare animate-on-scroll elements ko observe karna shuru karo
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});