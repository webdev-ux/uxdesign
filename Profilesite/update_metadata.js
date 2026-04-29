const fs = require('fs');

const files = [
    {
        path: 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/Casestudy/metro-service.html',
        stack: 'Vue.js, Mapbox GL, Node.js'
    },
    {
        path: 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/Casestudy/gn-hearing.html',
        stack: 'React Native, TypeScript, TailwindCSS'
    },
    {
        path: 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/Casestudy/carlsberg.html',
        stack: 'Angular, .NET Core, D3.js'
    }
];

files.forEach(file => {
    let content = fs.readFileSync(file.path, 'utf8');
    
    // Find the end of the metadata list and append the Tech Stack
    const searchStr = `                <div class="metadata-item">
                    <span>Period</span>`;
    const searchStr2 = `                <div class="metadata-item">
                    <span>Year</span>`;
                    
    const techStackStr = `                <div class="metadata-item">
                    <span>Tech Stack</span>
                    <span>${file.stack}</span>
                </div>`;
                
    if (content.includes(searchStr)) {
        content = content.replace(searchStr, techStackStr + '\n' + searchStr);
    } else if (content.includes(searchStr2)) {
        content = content.replace(searchStr2, techStackStr + '\n' + searchStr2);
    }
    
    fs.writeFileSync(file.path, content);
});

console.log("Done updating individual case studies");
