const fs = require('fs');
const path = 'c:/Users/devlp/OneDrive/Desktop/antigravity/profileSite/Profilesite/index.html';
let content = fs.readFileSync(path, 'utf8');

const css = `
<style>
.resume-link-wrapper {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', 'Roboto Mono', ui-monospace, SFMono-Regular, monospace;
  font-size: 0.85em;
  color: var(--accent, #575ECF);
  text-decoration: none;
  position: relative;
  margin-left: 8px;
  padding: 4px 12px;
  border-radius: 99px;
  border: 1px solid rgba(87, 94, 207, 0.3);
  overflow: hidden;
  transition: border-color 0.3s ease;
  vertical-align: middle;
}

.resume-link-wrapper::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--accent, #575ECF);
  opacity: 0.1;
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

.resume-link-wrapper:hover {
  border-color: rgba(87, 94, 207, 0.6);
}

.resume-link-wrapper:hover::before {
  transform: translateX(0);
}

.resume-link-text {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.resume-link-text::before {
  content: '[';
  margin-right: 4px;
  opacity: 0.7;
  font-weight: 400;
}

.resume-link-text::after {
  content: ' \\u2192]';
  white-space: pre;
  display: inline-block;
  transition: transform 0.3s ease;
  opacity: 0.7;
  font-weight: 400;
}

.resume-link-wrapper:hover .resume-link-text::after {
  transform: translateX(3px);
}

.resume-hover-info {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.85em;
  transition: max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, margin-left 0.3s ease;
}

.resume-link-wrapper:hover .resume-hover-info {
  max-width: 80px;
  opacity: 1;
  margin-left: 6px;
}
</style>
`;

const linkHtml = `<a href="/Cv/Ahmed_Toumaoui_Resume.pdf" target="_blank" download="Ahmed_Toumaoui_UX_Designer_CV.pdf" class="resume-link-wrapper"><span class="resume-link-text">View Resume</span><span class="resume-hover-info"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>PDF</span></a>`;

content = content.replace('</head>', css + '</head>');
content = content.replace('scalable design systems.</p>', 'scalable design systems.' + linkHtml + '</p>');

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
