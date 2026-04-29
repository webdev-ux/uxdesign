const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/assets/animations.js';

const code = `
// Dark Mode Theme Toggle
const setupThemeToggle = () => {
    const themeBtn = document.querySelector('[aria-label="Toggle theme"]');
    if (!themeBtn) return;
    
    const updateIcon = (isDark) => {
        if (isDark) {
            themeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
        } else {
            themeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>';
        }
    };

    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateIcon(isDark);
    
    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const currentlyDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', currentlyDark ? 'dark' : 'light');
        updateIcon(currentlyDark);
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
} else {
    setupThemeToggle();
}
`;

fs.appendFileSync(path, code, 'utf8');
console.log('Appended dark mode toggle to animations.js');
