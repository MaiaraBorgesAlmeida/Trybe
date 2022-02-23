/* 6. Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. */

let divisors = 1;
let numberCheck = 25;

for (let number = 2; number <= numberCheck; number += 1) {
  if (numberCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberCheck + ' é primo');
else console.log(numberCheck + ' não é primo');