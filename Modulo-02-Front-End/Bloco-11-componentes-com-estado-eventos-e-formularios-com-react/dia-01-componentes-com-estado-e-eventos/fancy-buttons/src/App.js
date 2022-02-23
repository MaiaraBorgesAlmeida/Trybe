   // 1. Crie uma aplicação React com npx create-react-app fancy-buttons. Altere o componente App.js para que seja um componente de classe e 
   // contenha um botão associado a um evento que imprime um texto qualquer via console.log().

   // 2. Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, 
   // cada um escrevendo algo diferente no console do navegador via console.log().
   
   // 3. Declare dentro da classe do seu componente a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

   // 4. Garanta acesso ao objeto this na função que você declarou.

   // 5. Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! 
   // Primeiramente, defina um estado inicial para a contagem de cada botão.

   // 6. Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

   // 7. Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

   // 8. Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

   // 9. A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique.
   
   import React from 'react';

   class App extends React.Component {
     constructor() {
       super();
 
       this.state = {
         clicksBtnOne: 0,
         clicksBtnTwo: 0,
         clicksBtnThree: 0,
       };
 
       this.handleButtonOne = this.handleButtonOne.bind(this);
       this.handleButtonTwo = this.handleButtonTwo.bind(this);
       this.handleButtonThree = this.handleButtonThree.bind(this);
     }
 
     handleButtonOne() {
       this.setState(({ clicksBtnOne }) => ({
         clicksBtnOne: clicksBtnOne + 1,
       }), () => {
         console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
       });
     }
     
     handleButtonTwo() {
       this.setState(({ clicksBtnTwo }) => ({
         clicksBtnTwo: clicksBtnTwo + 1,
       }), () => {
         console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
       });
     }
     
     handleButtonThree() {
       this.setState(({ clicksBtnThree }) => ({
         clicksBtnThree: clicksBtnThree + 1,
       }), () => {
         // imprimir a cor no console após o setState atualizar a quantidade de clicks no botão
         console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
       });
     }
 
    // não precisamos utilizar o bind porque ela é utilizada apenas dentro do contexto do componente App
     getButtonColor(num) {
       return num % 2 === 0 ? 'green' : 'white';
     } // operador ternário que realiza a lógica para mudarmos a cor do botão para verde quando for um número par
 
     render() {
       const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
       return (
         <div>
           <button
           // para renderizar as cores, precisa acrescentar a função que contém a nossa lógica ao "inline style", passando o estado correspondente como parâmetro
             onClick={ this.handleButtonOne }
             style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
           >
             Botão 1 | Count = { clicksBtnOne }
           </button>
           <button
             onClick={ this.handleButtonTwo }
             style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
           >
             Botão 2 | Count = { clicksBtnTwo }
           </button>
           <button
             onClick={ this.handleButtonThree }
             style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
           >
             Botão 3 | Count = { clicksBtnThree }
           </button>
         </div>
       );
     }
   }
 
   export default App;