/* 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
***** */


let size = 5;
let symbol = '*';
let line = '';

for (let index = 0; index <= size; index += 1) {
  console.log(line);
  line = line + symbol;
};