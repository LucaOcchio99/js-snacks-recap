//Inserisci un numero, se è pari stampo il numero, 
//se è dispari stampa il numero successivo 

const numero_inserito = parseInt(prompt('Inserisci un numero'));

if (numero_inserito % 2 == 0) {
    console.log(`Il numero è pari ${numero_inserito}`);
} else if (numero_inserito % 2 != 0) {
    const somma = numero_inserito + 1;
    console.log(`Originariamente il numero era dispari. Ho dovuto sommarlo di uno.. ${somma}`)
}