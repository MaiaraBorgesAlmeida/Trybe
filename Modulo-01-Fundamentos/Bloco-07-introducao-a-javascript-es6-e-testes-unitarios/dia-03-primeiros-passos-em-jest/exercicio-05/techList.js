/* 5. A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. 
Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
{
    tech: "NomeTech",
    name: name,
}

Implemente a função techList a partir dos testes dados. É importante nunca alterar os testes ou as variáveis já escritas no código. */

const techList = (arrayTechnologies, name) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';
  
    const sortedArray = arrayTechnologies.sort();
    const technologyList = [];
  
    for (let index = 0; index < sortedArray.length; index += 1) {
      technologyList.push({
        tech: sortedArray[index],
        name,
      });
    }
  
    return technologyList;
  };
  
  module.exports = techList;