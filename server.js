const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Initialize database
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    company TEXT,
    message TEXT
  )`);
});

const app = express();
app.use(express.json());

// Simple CORS support
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, company, message } = req.body;
  db.run(
    `INSERT INTO contacts (firstName, lastName, company, message) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, company, message],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ id: this.lastID });
    }
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
