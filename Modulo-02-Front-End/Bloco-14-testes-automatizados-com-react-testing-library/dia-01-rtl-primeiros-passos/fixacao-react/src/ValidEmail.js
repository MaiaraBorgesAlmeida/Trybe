 import React from 'react';

 const verifyEmail = (email) => {
   const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
   return emailRegex.test(email);
 };

 const ValidEmail = (props) => {
   const { email } = props;
   return (
     <div>
       <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
          {
            email && (
                <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>
              </h3>
            )
          }
      </div>
    );
  };

export default ValidEmail;

// 1º funcionalidade: Não exibir a mensagem caso o email ainda não tenha sido enviado.
// Adiciona uma renderização condicional com o operador lógico '&&' para que o elemento <h3> só exista quando a variável email tiver algum valor verdadeiro.

// 2º funcionalidade: Mude a cor do texto caso o email seja válido ou inválido.
// 