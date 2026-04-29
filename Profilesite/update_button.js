const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(path, 'utf8');

// Remove the old CSS
content = content.replace(/<style>\n\.resume-link-wrapper[\s\S]*?<\/style>\n/, '');

// Remove the old link and add the new button after the </p>
const oldLinkRegex = /<a href="\/Cv\/Ahmed_Toumaoui_Resume\.pdf" target="_blank"\s+class="resume-link-wrapper">[\s\S]*?<\/a>/;
content = content.replace(oldLinkRegex, '');

// The text ends with:
// scalable design systems.</p>
// We want to insert the new button right after that </p>

const newButton = `
<div class="mt-10">
  <a href="/Cv/Ahmed_Toumaoui_Resume.pdf" target="_blank" class="group inline-flex items-center gap-3 rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-all hover:bg-foreground hover:text-background">
    <span class="font-display">Download Resume <span class="opacity-50 font-normal">[PDF / 316kb]</span></span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-y-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  </a>
</div>`;

content = content.replace('scalable design systems.</p>', 'scalable design systems.</p>' + newButton);

fs.writeFileSync(path, content, 'utf8');
console.log('Button updated!');
