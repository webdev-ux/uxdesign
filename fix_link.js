const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace('download="Ahmed_Toumaoui_UX_Designer_CV.pdf"', '');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed link!');
