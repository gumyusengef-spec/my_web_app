
// index.js
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set default content type
    res.setHeader('Content-Type', 'text/plain');

    // Routing
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the about page.');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

