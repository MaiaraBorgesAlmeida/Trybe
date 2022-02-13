// 1: Crie um formulário com um campo select, dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado.
// 2. Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 3. Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 4. Busque na documentação de React acerca de formulários como se deve adicionar um input para arquivos. Acrescente um ao seu formulário.
// 5. Encapsule alguns dos seus campos num fieldset.
// 6. Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
// 7. Faça duas validações em um desses componentes filhos e uma em um outro.
// 8. Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
// Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?

import React, { Component } from 'react';
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset
            nameValue={ name }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />

          <DataFieldset anecdoteValue={ anecdote } handleChange={ this.handleChange } />

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com termos e acordos
          </label>
        </form>
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;