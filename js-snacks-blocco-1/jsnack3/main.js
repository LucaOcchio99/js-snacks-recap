//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array

const array_vuoto = [];
for(let i = 0; i < 6; i++) {
    const numero_inserito = parseInt(prompt('Inserisci un numero'))
    if(numero_inserito % 2 != 0) {
        array_vuoto.push(numero_inserito)
    }
}
console.log(array_vuoto);