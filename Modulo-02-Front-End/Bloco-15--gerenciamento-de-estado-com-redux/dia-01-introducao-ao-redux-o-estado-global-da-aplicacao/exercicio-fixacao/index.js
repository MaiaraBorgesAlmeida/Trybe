/* 1. Criando um Redux store:
A store do Redux é um objeto responsável por armazenar todos os estados que serão usados globalmente na sua aplicação. 
Quando um componente precisar ler um estado, ele vai consultar a store para ter acesso a essa informação. Para que seja possível a criação de uma store, 
é necessária a utilização do método createStore(), que recebe como parâmetro o reducer. O reducer manipula os dados da store a partir de uma ordem dada por uma action. 
As actions funcionam como ordens a serem interpretadas a partir das regras de negócio definidas no reducer e para cada type de action diferente fazemos a alteração descrita. */

/* 2 - Buscando o estado dentro de um Redux store:
O Redux permite a utilização de métodos para interação com a store. Por exemplo, você pode recuperar o estado atual da store utilizando o getState(). */

/* 3. Definindo uma Action:
As actions são ações que serão enviadas pelo componente para acionar os reducers. Elas informam qual função deverá rodar e qual é o dado que será utilizado como parâmetro, 
em outras palavras, ela avisará ao reducer quando alguma coisa precisará ser feita ou alterada. */

const Redux = require('redux');

const signIn = (email) => ({
  type: 'LOGIN',
  email,
});

const DEFAULT_STATE = {
  login: false,
  email: '',
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(signIn('test@test.com', 'test123'));
console.log(store.getState());