const express = require('express');
const fs = require('fs').promises;

// On prépare notre petite app Express bien sage
const app = express();

// Fonction pour lire et compter les étudiant depuis le csv
function countStudents(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((content) => {
      const lines = content.trim().split('\n');
      const dataRows = lines.slice(1).filter((line) => line.trim() !== '');

      const fieldGroups = {};

      for (const studentLine of dataRows) {
        const [firstName, , , field] = studentLine.split(',');
        if (!fieldGroups[field]) {
          fieldGroups[field] = {
            count: 1,
            names: [firstName],
          };
        } else {
          fieldGroups[field].count += 1;
          fieldGroups[field].names.push(firstName);
        }
      }

      let result = `Number of students: ${dataRows.length}\n`;
      for (const [field, group] of Object.entries(fieldGroups)) {
        result += `Number of students in ${field}: ${group.count}. List: ${group.names.join(', ')}\n`;
      }

      return result.trim(); // On enlève le \n 
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Petite page d’accueil mims
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route magique pour la liste des étudiant
app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];

  try {
    const studentReport = await countStudents(dbPath);
    res.send(`This is the list of our students\n${studentReport}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Lancement du serveur sur le port 1245 comme d'hab
const port = 1245;
app.listen(port);

module.exports = app;
