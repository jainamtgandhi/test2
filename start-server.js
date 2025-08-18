const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav'
};

const server = http.createServer((req, res) => {
  // Security: Block access to sensitive files
  const sensitiveExtensions = ['.json', '.md', '.bat', '.ps1', '.py'];
  const sensitiveFiles = ['info.json', 'projects.json', 'system.json'];
  
  if (sensitiveExtensions.some(ext => req.url.includes(ext)) || 
      sensitiveFiles.some(file => req.url.includes(file))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Forbidden');
    return;
  }
  
  // Block access to backup directory
  if (req.url.includes('backup-rename') || 
      req.url.includes('ANALYTICS_SETUP') ||
      req.url.includes('PERMANENT_SERVER_SETUP') ||
      req.url.includes('codebase_assessment')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Forbidden');
    return;
  }

  let filePath = '.' + req.url;
  
  if (filePath === './') {
    filePath = './index.html';
  }

  // Handle app routes - check if this is an app request
  if (req.url.startsWith('/') && !req.url.includes('.')) {
    const appName = req.url.substring(1); // Remove leading slash
    
    // First check if there's a direct HTML file at root level
    const rootPath = `./${appName}.html`;
    if (fs.existsSync(rootPath)) {
      filePath = rootPath;
    } else {
      // Fallback to app directory structure
      const appPath = `./src/apps/${appName}/${appName}.html`;
      if (fs.existsSync(appPath)) {
        filePath = appPath;
      }
    }
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Press Ctrl+C to stop the server');
}); 