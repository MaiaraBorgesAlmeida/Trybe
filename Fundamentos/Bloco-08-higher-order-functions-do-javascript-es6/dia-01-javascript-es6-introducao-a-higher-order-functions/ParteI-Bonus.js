/* Parte I - Game Actions Simulator: Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. 
Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. */

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

// 1. Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const { strength } = dragon;
    const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
    return dragonDmg;
};

// 2. Crie uma função que reotorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
    const { weaponDmg } = warrior;
    const minDmg = warrior.strength;
    const maxDmg = minDmg * weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDamage;
};

// 3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem 
// (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
};
  
if (mageMana > 15) {
  const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  turnStats.manaSpent = 15;
  turnStats.damageDealt = mageDamage;
    return turnStats;
}
  return turnStats;
};