const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dynamic intern dashboard data
app.get('/api/intern', (req, res) => {
  const name = req.query.name || 'Default Intern';

  res.json({
    name,
    referralCode: `${name.toLowerCase().replace(/\s+/g, '')}2025`,
    totalDonations: 10000
  });
});

// Leaderboard with dynamic intern addition
app.get('/api/leaderboard', (req, res) => {
  const name = req.query.name;

  let leaderboard = [
    { name: 'Aarya', donations: 15000 },
    { name: 'Bhargav', donations: 10000 },
    { name: 'Zara', donations: 8000 }
  ];

  if (name && !leaderboard.some(entry => entry.name.toLowerCase() === name.toLowerCase())) {
    leaderboard.push({
      name,
      donations: 10000
    });
  }

  leaderboard.sort((a, b) => b.donations - a.donations);
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
