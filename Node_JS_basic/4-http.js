const http = require('http');

// On crée notre petit serveur HTTP
const app = http.createServer((req, res) => {
  // On répond avec un statut 200 = tout va bieeeeen
  res.statusCode = 200;

  // Le contenu sera du texte simple
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
