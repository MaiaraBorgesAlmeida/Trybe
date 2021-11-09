/* 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const a = 15;
const b = 32;
const c = 19;

if (a > b && a > c){
    console.log("a é maior");

} else if (b > a && b > c){
    console.log("b é maior");

} else {
    console.log("c é maior");
}