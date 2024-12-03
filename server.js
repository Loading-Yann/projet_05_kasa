// server.js
const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;


const logements = require('./src/data/logements.json');

app.use(cors()); 

app.get('/api/logements', (req, res) => {
  res.json(logements);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
