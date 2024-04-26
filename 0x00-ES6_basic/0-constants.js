// 0-constants.js
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  const r = ' is okay';
  return (r);
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
