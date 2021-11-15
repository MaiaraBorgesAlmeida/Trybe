/* 4. Por fim, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** */


let n = 5;
let symbol = '*';
let line = '';

let matrix = (n + 1) / 2;
let left = matrix;
let right = matrix;

for (let index = 0; index <= matrix; index += 1) {
  for (let i = 0; i <= n; i += 1) {
    if (i > left && i < right) {
      line = line + symbol;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1
};