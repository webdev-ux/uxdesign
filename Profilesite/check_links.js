const fs = require('fs');
const content = fs.readFileSync('c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html', 'utf8');

const i1 = content.indexOf('<a href="Casestudy/sport.html" class="hover:text-accent transition-colors">');
if (i1 > -1) {
  console.log("Found sport.html title link!");
  console.log(content.substring(i1 - 200, i1 + 200));
}

const i2 = content.indexOf('Reducing commuter friction');
if (i2 > -1) {
  console.log("Found title text!");
  console.log(content.substring(i2 - 200, i2 + 200));
}
