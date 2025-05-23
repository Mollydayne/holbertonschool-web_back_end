const express = require('express');

// On prépare tout
const app = express();

// coucou user qui est sur la page d'accueil
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// L’appli écoute gentiment sur le port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
