
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Load users from a local JSON file
const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Simulate SQL Injection vulnerability
app.get('/users', (req, res) => {
  const { id } = req.query;

  // In a real SQL setup, this would be unsafe (vulnerable to SQL injection)
  const user = users.find(user => user.id.toString() === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found or invalid input' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
