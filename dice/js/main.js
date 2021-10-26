/* 
Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

//genero e assegno i 2 numeri casuali
const user_numb = Math.round((Math.random() * 5) + 1)
const comp_numb = Math.round((Math.random() * 5) + 1)

console.log(`${user_numb} ${comp_numb}`);

//creo una variabile output da stampare alla fine con il risultato
let output

//confronto i numeri per verificare la vittoria di una delle 2 parti
if (user_numb > comp_numb) {
    output = `il giocatore ha vinto con un punteggio di ${user_numb} a ${comp_numb}`
} else if (user_numb < comp_numb) {
    output = `il computer ha vinto con un punteggio di ${comp_numb} a ${user_numb}`
} else {
    output = `la sfida è terminata in pareggio con un punteggio di ${comp_numb} a ${user_numb}`
}

//stampo il risultato
console.log(output);