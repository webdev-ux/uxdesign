const initAnimations = () => {
    // 1. Scroll-Triggered Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('motion-visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Function to add motion classes to elements
    const setupReveals = () => {
        // Elements to animate
        const revealElements = document.querySelectorAll('h1, h2, h3, .bg-card, .rounded-2xl, .text-lg, .text-muted-foreground, .reveal, .font-display, .annotation');
        
        revealElements.forEach((el, index) => {
            // Don't animate nav or small UI elements initially
            if(el.closest('header')) return;
            
            // Add base class
            if (!el.classList.contains('motion-reveal')) {
                el.classList.add('motion-reveal');
                
                // Add stagger to sibling cards
                if (el.classList.contains('bg-card') && el.parentElement) {
                    const siblings = Array.from(el.parentElement.children);
                    const elIndex = siblings.indexOf(el);
                    if (elIndex >= 0 && elIndex < 4) {
                        el.classList.add(`motion-stagger-${elIndex + 1}`);
                    }
                }
                
                observer.observe(el);
            }
        });
    };

    // Run setup immediately, and again after a short delay to account for React hydration
    setupReveals();
    setTimeout(setupReveals, 500);

    // 2. Magnetic Hover Effect on Buttons
    const setupMagneticButtons = () => {
        const buttons = document.querySelectorAll('a.rounded-full, button.rounded-full');
        
        buttons.forEach(btn => {
            // Wrap button contents if not already wrapped
            if (!btn.classList.contains('magnetic-element')) {
                btn.classList.add('magnetic-element');
                
                // Mouse move effect
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    // Move the button slightly towards the cursor (strength: 0.3)
                    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                });
                
                // Reset on mouse leave
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate(0px, 0px)`;
                });
            }
        });
    };

    setupMagneticButtons();
    setTimeout(setupMagneticButtons, 500);
    
    // 3. Number Counter Animation
    const setupNumberCounters = () => {
        const numberElements = document.querySelectorAll('.font-display');
        
        numberElements.forEach(el => {
            const text = el.innerText.trim();
            // Match things like "+25%", "10+", "100%", "6", but exclude "01" etc.
            const match = text.match(/^([+]?)([1-9]\d*)([%+]?)$/);
            if (match && !el.classList.contains('counter-animated')) {
                el.classList.add('counter-animated');
                
                const prefix = match[1] || '';
                const targetNum = parseInt(match[2], 10);
                const suffix = match[3] || '';
                
                // Set initial state
                el.innerText = `${prefix}0${suffix}`;
                
                const animateCounter = () => {
                    let startTimestamp = null;
                    const duration = 2000; // 2 seconds
                    
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        
                        // easeOutExpo for a fast start and slow finish
                        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                        const currentNum = Math.floor(easeOut * targetNum);
                        
                        el.innerText = `${prefix}${currentNum}${suffix}`;
                        
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            el.innerText = text; // Ensure final text matches exactly
                        }
                    };
                    
                    window.requestAnimationFrame(step);
                };
                
                // Use IntersectionObserver to start animation when visible
                const counterObserver = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateCounter();
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                counterObserver.observe(el);
            }
        });
    };

    setupNumberCounters();
    setTimeout(setupNumberCounters, 500);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

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


// Skill Toggle Logic
const setupSkillToggle = () => {
    const switchBtn = document.getElementById('mode-switch-btn');
    const labelDesign = document.getElementById('label-design');
    const labelDev = document.getElementById('label-dev');
    const switchKnob = document.getElementById('mode-switch-knob');
    const skillsSection = document.getElementById('skills');
    
    if (!switchBtn || !skillsSection || !switchKnob) return;
    
    let isDevMode = false;
    
    const toggleMode = () => {
        isDevMode = !isDevMode;
        
        if (isDevMode) {
            skillsSection.classList.add('is-dev-mode');
            console.log("%c Dev Mode Activated: Checking source code?", "color: #ff6b00; font-weight: bold;");
            
            // Update switch UI
            switchKnob.style.transform = 'translateX(24px)';
            
            if (labelDesign && labelDev) {
                labelDesign.classList.remove('opacity-100');
                labelDesign.classList.add('opacity-40');
                labelDev.classList.remove('opacity-40');
                labelDev.classList.add('opacity-100');
            }
        } else {
            skillsSection.classList.remove('is-dev-mode');
            
            // Update switch UI
            switchKnob.style.transform = 'translateX(0)';
            
            if (labelDesign && labelDev) {
                labelDesign.classList.remove('opacity-40');
                labelDesign.classList.add('opacity-100');
                labelDev.classList.remove('opacity-100');
                labelDev.classList.add('opacity-40');
            }
        }
    };
    
    switchBtn.addEventListener('click', toggleMode);
    
    // Allow clicking the labels directly to switch
    if (labelDesign) labelDesign.addEventListener('click', () => { if (isDevMode) toggleMode(); });
    if (labelDev) labelDev.addEventListener('click', () => { if (!isDevMode) toggleMode(); });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSkillToggle);
} else {
    setupSkillToggle();
}
