// index.js
const express = require('express'); // import Express
const app = express();              // create app instance
const PORT = 3000;                  // set port

// Middleware to parse JSON (optional, useful for future features)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Optional login route
app.get('/login', (req, res) => {
  const { user, pass } = req.query; // example: /login?user=admin&pass=1234
  if (user === 'admin' && pass === '1234') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

