// Improved theme switcher

// Function to set theme that works everywhere
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    console.log('Theme set to:', isDark ? 'dark' : 'light');
}

// Initialize theme immediately to prevent flash of wrong theme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply theme immediately
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Setup theme toggle functionality after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get theme toggle buttons
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    // Toggle theme function
    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(!isDark);
    };
    
    // Add event listeners to theme toggle buttons
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
        console.log('Theme toggle button listener added');
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
        console.log('Mobile theme toggle button listener added');
    }
});
