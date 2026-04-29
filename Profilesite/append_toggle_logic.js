const fs = require('fs');
const file = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/assets/animations.js';
let content = fs.readFileSync(file, 'utf8');

const toggleLogic = `

// Skill Toggle Logic
const setupSkillToggle = () => {
    const designBtn = document.getElementById('mode-design-btn');
    const devBtn = document.getElementById('mode-dev-btn');
    const skillsSection = document.getElementById('skills');
    
    if (!designBtn || !devBtn || !skillsSection) return;
    
    const setDesignMode = () => {
        skillsSection.classList.remove('is-dev-mode');
        
        designBtn.classList.add('bg-foreground', 'text-background', 'shadow-sm');
        designBtn.classList.remove('text-muted-foreground', 'hover:text-foreground');
        
        devBtn.classList.remove('bg-foreground', 'text-background', 'shadow-sm');
        devBtn.classList.add('text-muted-foreground', 'hover:text-foreground');
    };
    
    const setDevMode = () => {
        skillsSection.classList.add('is-dev-mode');
        
        devBtn.classList.add('bg-foreground', 'text-background', 'shadow-sm');
        devBtn.classList.remove('text-muted-foreground', 'hover:text-foreground');
        
        designBtn.classList.remove('bg-foreground', 'text-background', 'shadow-sm');
        designBtn.classList.add('text-muted-foreground', 'hover:text-foreground');
    };
    
    designBtn.addEventListener('click', setDesignMode);
    devBtn.addEventListener('click', setDevMode);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSkillToggle);
} else {
    setupSkillToggle();
}
`;

if (!content.includes('setupSkillToggle')) {
    fs.appendFileSync(file, toggleLogic);
    console.log('Skill toggle logic appended successfully.');
} else {
    console.log('Skill toggle logic already exists.');
}
