// 3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}