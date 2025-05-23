// Module import 
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// On écoute
process.stdin.on('data', (data) => {
  // On affiche le nom saisi
  process.stdout.write(`Your name is: ${data}`);
});

// On ecoute Ctrl+D ou pipe
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});