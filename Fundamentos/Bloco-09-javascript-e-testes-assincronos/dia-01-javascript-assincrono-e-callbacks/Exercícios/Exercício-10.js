/* 10: Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu 
bem o funcionamento do beforeEach e do afterEach. */

beforeEach(() => console.log('1 - beforeEach')); // antes de cada teste
afterEach(() => console.log('1 - afterEach')); // depois de cada teste

test('', () => console.log('1 - test')); // o prório teste

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // antes de cada teste dentro do describe
  afterEach(() => console.log('2 - afterEach')); // depois de cada teste dentro do describe

  test('', () => console.log('2 - test'));  // o teste dentro do describe
});