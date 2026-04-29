const fs = require('fs');
const content = fs.readFileSync('c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html', 'utf8');
const startIdx = content.indexOf('<section id="work"');
console.log(content.substring(startIdx + 6000, startIdx + 12000));
