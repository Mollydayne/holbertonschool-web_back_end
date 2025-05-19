// Affiche le message d’accueil
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Lis l'entrée utilisateur
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${name}\n`);
});

// Quand l’entrée standard est terminée
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
