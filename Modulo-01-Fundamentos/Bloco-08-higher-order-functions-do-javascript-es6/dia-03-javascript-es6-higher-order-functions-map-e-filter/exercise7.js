// 7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))[0].name;
  }


// Você também pode solucionar da seguinte forma:
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}