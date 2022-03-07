// 2. Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
    const names = books.reduce((acc, book, index, array) => {
      if (index === array.length - 1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`;
    }, '');
    return names.trim();
}