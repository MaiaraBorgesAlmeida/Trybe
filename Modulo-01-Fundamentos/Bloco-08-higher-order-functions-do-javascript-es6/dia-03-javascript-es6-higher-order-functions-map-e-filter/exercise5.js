// 5. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    return books
      .filter((book) => wantedGenres.includes(book.genre))
      .map((book) => book.author.name).sort();
  }