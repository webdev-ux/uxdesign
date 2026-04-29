const fs = require('fs');
const file = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the Methodologies header
const targetHeader = '<h2 class="mt-4 text-3xl md:text-4xl">Methodologies</h2>';
const newHeader = `<h2 class="mt-4 text-3xl md:text-4xl flex flex-wrap items-center gap-4 md:gap-6">Methodologies <div class="inline-flex items-center rounded-full border border-hairline bg-surface p-1 text-sm font-medium mt-2 md:mt-0"><button id="mode-design-btn" class="rounded-full px-4 py-1.5 transition-all bg-foreground text-background shadow-sm">Design Mode</button><button id="mode-dev-btn" class="rounded-full px-4 py-1.5 text-muted-foreground hover:text-foreground transition-all">Dev Mode</button></div></h2>`;
content = content.replace(targetHeader, newHeader);

// Replace Card 1
const card1Target = '<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent">UX Research</h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Product Discovery &amp; Framing</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Hypothesis-Driven Research</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Behavioral Segmentation</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Qual &amp; Quant Methods</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Usability Testing</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>AI-assisted Synthesis</li></ul></div>';

const card1New = `<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent"><span class="design-text">UX Research</span><span class="dev-text hidden">Data &amp; Testing</span></h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Product Discovery &amp; Framing</span><span class="dev-text hidden">API Design &amp; Requirements</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Hypothesis-Driven Research</span><span class="dev-text hidden">A/B Testing &amp; Telemetry</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Behavioral Segmentation</span><span class="dev-text hidden">Data Modeling</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Qual &amp; Quant Methods</span><span class="dev-text hidden">Performance Profiling</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Usability Testing</span><span class="dev-text hidden">E2E Testing (Cypress)</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">AI-assisted Synthesis</span><span class="dev-text hidden">CI/CD Automation</span></li></ul></div>`;

content = content.replace(card1Target, card1New);

// Replace Card 2
const card2Target = '<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent">UI Design</h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Interaction Design</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Prototyping</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Design Systems</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>WCAG Accessibility</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Journey &amp; Service Mapping</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Figma · Adobe XD</li></ul></div>';

const card2New = `<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent"><span class="design-text">UI Design</span><span class="dev-text hidden">Frontend Arch.</span></h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Interaction Design</span><span class="dev-text hidden">State Management (Vuex)</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Prototyping</span><span class="dev-text hidden">Rapid Prototyping (Vite)</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Design Systems</span><span class="dev-text hidden">Component Driven Dev</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">WCAG Accessibility</span><span class="dev-text hidden">Semantic HTML &amp; ARIA</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Journey &amp; Service Mapping</span><span class="dev-text hidden">Routing &amp; APIs</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Figma · Adobe XD</span><span class="dev-text hidden">Tailwind CSS / SCSS</span></li></ul></div>`;

content = content.replace(card2Target, card2New);

// Replace Card 3
const card3Target = '<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent">Frontend</h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Vue.js</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>React.js</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>HTML5 / CSS3</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>JavaScript (MS 70-480)</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Design-to-code handoff</li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span>Component libraries</li></ul></div>';

const card3New = `<div class="bg-card p-8"><h3 class="text-sm uppercase tracking-widest text-accent"><span class="design-text">Frontend</span><span class="dev-text hidden">Tooling &amp; Backend</span></h3><ul class="mt-6 space-y-3"><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Vue.js</span><span class="dev-text hidden">Node.js / Express</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">React.js</span><span class="dev-text hidden">Database (SQL/NoSQL)</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">HTML5 / CSS3</span><span class="dev-text hidden">REST / GraphQL APIs</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">JavaScript (MS 70-480)</span><span class="dev-text hidden">Webpack / Vite Config</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Design-to-code handoff</span><span class="dev-text hidden">Version Control (Git)</span></li><li class="flex items-baseline gap-3 text-foreground"><span class="h-1 w-1 rounded-full bg-foreground/40"></span><span class="design-text">Component libraries</span><span class="dev-text hidden">Cloud Deploy (Vercel)</span></li></ul></div>`;

content = content.replace(card3Target, card3New);

// Add custom styles for the toggle transitions if not present
if (!content.includes('.is-dev-mode .design-text')) {
    content = content.replace('</style>', `
    /* Dev Mode Toggle Styles */
    .design-text, .dev-text {
        transition: opacity 0.3s ease, transform 0.3s ease;
        display: inline-block;
    }
    .dev-text.hidden {
        display: none !important;
    }
    
    .is-dev-mode .design-text {
        display: none !important;
    }
    .is-dev-mode .dev-text {
        display: inline-block !important;
        animation: fadeIn 0.4s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>`);
}

fs.writeFileSync(file, content);
console.log('Successfully updated index.html with toggle UI and new skill structure.');
