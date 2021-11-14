// Iremos utilizar esse array para realizar os exercícios do 1 ao 7.

// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log():

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// 2. Some todos os valores contidos no array e imprima o resultado:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);