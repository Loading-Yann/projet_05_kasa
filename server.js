// server.js
const express = require('express');
const cors = require('cors'); // Ajoutez cette ligne
const app = express();
const PORT = 5000;

// Chemin vers le fichier JSON
const logements = require('./src/data/logements.json');

app.use(cors()); // Ajoutez cette ligne pour activer CORS

app.get('/api/logements', (req, res) => {
  res.json(logements);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
