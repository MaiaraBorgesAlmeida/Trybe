/* 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem 
os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo. */

const x = 90;
const y = 45;
const z = 45;

if (x + y + z === 180){
    console.log ("true");

} else if (x + y + z > 180){
    console.log ("false");

} else {
    console.log ("Erro!")
}