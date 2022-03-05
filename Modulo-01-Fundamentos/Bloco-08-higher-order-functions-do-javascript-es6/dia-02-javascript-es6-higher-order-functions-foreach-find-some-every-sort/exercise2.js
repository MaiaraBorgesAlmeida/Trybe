// 2. Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName() {
    let nameBook; // Declarar a variável nameBook sem nenhum valor;
    
    // Aplica-se a condicional if utilizando operadores lógicos. O primeiro é o not (!) antes de nameBook, pois o fato de nameBook não guardar nenhum valor é retornado "undefined", ou seja, false. Assim, ao utilizar o operador not (!) antes de nameBook, estamos negando que ele seja falso, ou seja, convertendo-o para "true";
    // Utiliza o operador ou (||) para compor a lógica de que se nameBook retornar "true" ou se o tamanho da string contida na chave name de cada objeto em books for menor que o tamanho de nameBook, a função irá guardar o nome desse livro em nameBook;  
    // Na primeira iteração, como nameBook é undefined, ou seja não guarda o nome de nenhum livro, o primeiro nome de livro será guardado em nameBook. A partir da segunda iteração, é feita a comparação e se o nome do livro for menor que o que está guardado em nameBook , este irá tomar seu lugar e assim por diante até a última iteração.
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }