/* Exercício 01: Adicione uma callback como parâmetro da funcão getUser.
Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
Insira o retorno da função getUser;
Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian". */

// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// Definição da função getUser
const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian",
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName));
console.log(getUser(userNationality));

// Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName. 
// Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.