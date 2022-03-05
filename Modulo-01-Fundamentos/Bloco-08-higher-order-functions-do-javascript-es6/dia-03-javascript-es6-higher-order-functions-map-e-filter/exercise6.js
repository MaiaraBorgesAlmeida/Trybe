// 6. Crie um array com o nome de todos os livros com mais de 60 anos de publicação:

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books
      .filter((book) => currentYear - book.releaseYear > 60)
      .map((book) => book.name);
  }