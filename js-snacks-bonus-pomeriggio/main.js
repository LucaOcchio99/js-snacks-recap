//Ogni volta che si clicca un bottone, il nostro 
//programma chiederà un numero di 4 cifre all’utente.
//Se l’utente ha inserito un numero corretto, allora
// il programma calcolerà la somma e le media di tutte
// le cifre che lo compongono stampandola nel DOM,
//altrimenti ripeterà la richiesta di inserimento 
//finché non avrà inserito un numero corretto
const bottone = document.querySelector('.btn');

//bottone.addEventListner('click', function(){
//    let numero = prompt('inserisci un numero di 4 cifre');
//    let somma = 0;
//    let media = 0;

//    while ((numero_utente.length > 4) || (numero_utente.length < 4)) {
//        numero_utente = prompt('Insersici un numero di 4 cifre');
//    }
    
//    for (let i = 0; i < numero.length; i++) {
//        somma += parseInt(numero[i]);
//    }
//    media = somma / numero.length;
    
//    document.body.innerHTML = `<h3>la somma delle cifre è ${somma}.</h3> 
//    <h3> la media della somma delle cifre è ${media}.</h3>`;
    
//});




//Creare due array che hanno un numero diverso di elementi
//aggiungere elementi casuali all'array con meno elementi, finchè entrambi gli array 1

const primo_array = ['a', 'b', 'c', 'd', 'e'];
console.log(primo_array);
const secondo_array = ['e', 'f', 'g'];


while (primo_array.length !== secondo_array.length) {
    if (primo_array.length < secondo_array.length) {
        secondo_array.push('z'); 
    } else {
        primo_array.push('z');
    }
}

console.log(secondo_array);