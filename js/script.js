//  //

const distance = prompt('Quanti km vuoi percorrere?');
const age = parseInt(prompt('Qual è la tua età?'));
const price = (distance * 0.21);
console.log('il prezzo è:', price);
if (age < 18) {
    scontoUnder = (price * (20 / 100));
    console.log('lo sconto è:', scontoUnder);
}
if (age > 65) {
    scontoOver = (price * (40 / 100));
    console.log('lo sconto è:', scontoOver);
}