const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(path, 'utf8');

// Replace titles with links
content = content.replace(
  '<h3 class="mt-3 text-2xl md:text-3xl">Reducing commuter friction in a real-time transit product</h3>',
  '<a href="Casestudy/sport.html" class="hover:text-accent transition-colors"><h3 class="mt-3 text-2xl md:text-3xl">Reducing commuter friction in a real-time transit product</h3></a>'
);

content = content.replace(
  '<h3 class="mt-3 text-2xl md:text-3xl">Lowering behavioral barriers in digital hearing care</h3>',
  '<a href="Casestudy/banking.html" class="hover:text-accent transition-colors"><h3 class="mt-3 text-2xl md:text-3xl">Lowering behavioral barriers in digital hearing care</h3></a>'
);

content = content.replace(
  '<h3 class="mt-3 text-2xl md:text-3xl">Designing pricing tools people can decide with</h3>',
  '<a href="Casestudy/accounting.html" class="hover:text-accent transition-colors"><h3 class="mt-3 text-2xl md:text-3xl">Designing pricing tools people can decide with</h3></a>'
);

// Replace button text
content = content.replace(/View Case Study Example/g, 'View Deep Dive');

fs.writeFileSync(path, content, 'utf8');
console.log('Replacements complete.');
