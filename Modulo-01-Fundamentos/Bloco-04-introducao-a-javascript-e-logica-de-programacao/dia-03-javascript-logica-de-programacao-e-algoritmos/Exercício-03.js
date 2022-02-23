/* 3. Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
***** */


let n = 5;
let symbol = '*';
let line = '';
let position = n;

for (let index = 0; index < n; index += 1) {
  for (let i = 0; i <= n; i += 1) {
    if (i < position) {
      line = line + ' ';
    } else {
      line = line + symbol;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};