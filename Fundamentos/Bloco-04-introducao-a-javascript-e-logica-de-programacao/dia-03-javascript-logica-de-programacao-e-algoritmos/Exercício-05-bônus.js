/* 5. Faça uma pirâmide com n asteriscos de base, que seja vazia no meio: */

let n = 7;
let middle = (n + 1) / 2;
let left = middle;
let right = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == left || col == right || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  left -= 1;
  right += 1;
  console.log(outputLine);
}