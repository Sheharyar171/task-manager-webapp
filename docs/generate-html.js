const marked = require('marked');
const fs = require('fs');

// Initialize marked with default options
marked.setOptions({});

try {
  // Read README.md and convert to HTML
  const markdown = fs.readFileSync('README.md', 'utf8');
  const html = marked.parse(markdown);
  fs.writeFileSync('index.html', html);
  console.log('Documentation built successfully');
} catch (error) {
  console.error('Error building documentation:', error.message);
  process.exit(1);
}
