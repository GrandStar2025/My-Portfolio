// Smooth scrolling function for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll animation for elements
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

    // Initial button visibility check
    updateScrollButtons();
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

// Function to scroll projects horizontally
function scrollProjects(direction) {
    const container = document.querySelector('.projects-grid');
    const scrollAmount = 400; // Adjust this value based on your needs
    
    if (direction === 'next') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    
    // Update button visibility
    updateScrollButtons();
}

// Function to update scroll button visibility
function updateScrollButtons() {
    const container = document.querySelector('.projects-grid');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');
    
    // Show/hide previous button
    if (container.scrollLeft <= 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // Show/hide next button
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// Add scroll event listener to update buttons
document.querySelector('.projects-grid').addEventListener('scroll', updateScrollButtons);