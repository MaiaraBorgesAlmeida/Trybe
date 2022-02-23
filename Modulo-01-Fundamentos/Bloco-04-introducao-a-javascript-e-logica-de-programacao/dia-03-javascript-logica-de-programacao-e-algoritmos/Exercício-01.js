/* 1. faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5

*****
*****
*****
*****
***** */

let n = 5;
let symbol = '*';
let line = '';

for (let index = 0; index < n; index += 1) {
  line = line + symbol;
};
for (let index = 0; index < n; index += 1) {
  console.log(line);
};