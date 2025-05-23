const http = require('http');
const fs = require('fs').promises;

// Une fonction toute douce pour lire et analyser notre petit fichier CSV
async function countStudents(path) {
  try {
    const rawData = await fs.readFile(path, 'utf8');
    const lines = rawData.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, i) => {
        student[header.trim()] = values[i].trim();
      });
      return student;
    });

    const totalText = `Number of students: ${students.length}`;
    const fields = {};

    for (const student of students) {
      const { field, firstname } = student;
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    let details = '';
    for (const [field, names] of Object.entries(fields)) {
      details += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return `${totalText}${details}`;
  } catch {
    // Si le fichier n'existe pas ou est illisible ERREUR
    throw new Error('Cannot load the database');
  }
}

// On crée notre petit serveur HTTP <3
const app = http.createServer(async (req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Si l’utilisateur visite la racine `/` : on lui dit coucou 
  if (url === '/') {
    res.end('Hello Holberton School!');

  // Si l’utilisateur veut la liste des étudiant
  } else if (url === '/students') {
    const databasePath = process.argv[2]; // chemin donné en argument

    // Si aucun chemin n’a été donné
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    try {
      const studentSummary = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentSummary}`);
    } catch {
      res.end('This is the list of our students\nCannot load the database');
    }

  // Route inconnue 
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Notre serveur écoute sagement sur le port 1245
app.listen(1245);

module.exports = app;
