/* 
Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo. 
*/

//inizializzo costante vuota
const list = []

//creo una lista di valori mail
for (i = 1; i <= 10; i++) {
    list.push(`mail${i}@mail.com`)
}

console.log(list);

//richiedo la mail all'utente
const mail = prompt("Inserisci qui un indirizzo email valido")

console.log(mail);

//dihiaro la variabile output
let output

//verifico la presenza della variabile output nella lista
for (i = 1; i <= list.length; i++) {
    if (mail == list[i]) {
        output = 'accesso accordato';
        break;
    } 
    else {
        output = 'accesso negato';
    }
}

//output della risposta della ricerca
console.log(output);