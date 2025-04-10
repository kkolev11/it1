const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Student", "Problem Solver", "Tech Enthusiast"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Theme toggle
// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
    localStorage.setItem('dark-theme', isDark);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    setTheme(isDark);
});

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('dark-theme');
if (currentTheme === 'true' || (currentTheme === null && prefersDarkScheme.matches)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Listen for system theme changes
prefersDarkScheme.addListener(e => {
    if (localStorage.getItem('dark-theme') === null) {
        setTheme(e.matches);
    }
});

.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 100;
    background: var(--header-bg);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    transform: scale(1.1);
}

.theme-toggle i {
    font-size: 1.2rem;
}

// Check for saved theme preference
if (localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = `${level}%`;
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});