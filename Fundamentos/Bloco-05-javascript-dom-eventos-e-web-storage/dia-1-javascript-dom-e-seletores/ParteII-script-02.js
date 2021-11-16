 // 1. Adicione uma classe igual para os dois parágrafos.

// 2. Recupere os seus parágrafos via código _JavaScript_, usando a função `getElementsByClassName`;
const paragraphs = document.getElementsByClassName('para');

// 3. Altere algum estilo do primeiro deles.
paragraphs[0].style.fontSize = '1.5rem';
paragraphs[0].style.color = 'green';

// 4. Recupere o subtítulo e altere a cor dele usando a função `getElementsByTagName`.
const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'red';     