const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(path, 'utf8');

// Replace hover:text-accent with block hover:text-accent
content = content.replace(/class=\"hover:text-accent transition-colors\"/g, 'class="block relative z-10 hover:text-accent transition-colors w-full"');

fs.writeFileSync(path, content, 'utf8');
console.log('Added block and z-10 to title links.');
