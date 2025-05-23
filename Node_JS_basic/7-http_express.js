import express from 'express';
import { readFile } from 'fs/promises';

const app = express();

function countStudents(path) {
  return readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const records = lines.slice(1); // On ignore l'en-tête

      const fields = {};
      for (const record of records) {
        const [firstname, , , field] = record.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      let summary = `Number of students: ${records.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        summary += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      return summary.trim(); // On évite le \n final
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Page d’accueil
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route /students
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  try {
    const studentsSummary = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsSummary}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

// Serveur sur le port 1245
app.listen(1245);

export default app;
