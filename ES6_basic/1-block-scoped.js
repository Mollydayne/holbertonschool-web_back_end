export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // portée limitée à ce bloc
    const task2 = false;
  }

  return [task, task2];
}