// Check for saved theme preference, otherwise use light theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        const moonIcon = document.querySelector('#theme-toggle i');
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    }
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.querySelector('#theme-toggle i');

// Toggle theme function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'dark') {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
    }
}

// Add click event listener
themeToggle.addEventListener('click', toggleTheme);
