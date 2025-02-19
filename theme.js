// Theme management ke liye main function
function initTheme() {
    // Theme toggle button ko dhundho
    const themeToggle = document.getElementById('theme-toggle');
    // Theme icon ko dhundho
    const themeIcon = themeToggle.querySelector('i');
    
    // Local storage se current theme ko check karo
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Saved theme ko apply karo
    applyTheme(savedTheme);
    updateIcon(savedTheme === 'dark');
    
    // Theme toggle button pe click event add karo
    themeToggle.addEventListener('click', () => {
        // Current theme ko check karo
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        // Theme ko toggle karo
        const newTheme = isDark ? 'light' : 'dark';
        
        // Naya theme apply karo
        applyTheme(newTheme);
        updateIcon(!isDark);
        
        // New theme ko save karo local storage mai
        localStorage.setItem('theme', newTheme);
    });
}

// Theme ko apply karne ka function
function applyTheme(theme) {
    // HTML root element pe theme attribute set karo
    document.documentElement.setAttribute('data-theme', theme);
}

// Theme icon ko update karne ka function
function updateIcon(isDark) {
    // Theme toggle button ke icon ko dhundho
    const themeIcon = document.getElementById('theme-toggle').querySelector('i');
    
    // Icon ko update karo based on theme
    if (isDark) {
        // Dark theme ke liye sun icon
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        // Light theme ke liye moon icon
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Page load hone pe theme initialize karo
document.addEventListener('DOMContentLoaded', initTheme);
