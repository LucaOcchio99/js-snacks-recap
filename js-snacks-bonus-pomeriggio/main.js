//Ogni volta che si clicca un bottone, il nostro 
//programma chiederà un numero di 4 cifre all’utente.
//Se l’utente ha inserito un numero corretto, allora
// il programma calcolerà la somma e le media di tutte
// le cifre che lo compongono stampandola nel DOM,
//altrimenti ripeterà la richiesta di inserimento 
//finché non avrà inserito un numero corretto
const bottone = document.getElementById('btn');

let numero_utente = '';
bottone.addEventListner('click', function() {
    numero_utente = prompt('Inserisci un numero di quattro cifre');

    while ((numero_utente.length > 4) || (numero_utente.length < 4)) {
        numero_utente = prompt('Insersici un numero di 4 cifre');
    }
    let number = parseInt(numero_utente);
    let num1 = parseInt(number[0]);
    let num2 = parseInt(number[1]);
    let num3 = parseInt(number[2]);
    let num4 = parseInt(number[3]);

    let somma = num1 + num2 + num3 + num4;
    let media = somma / 4;

    document.body.innerHTML = `<h3>la somma delle cifre è ${somma}.</h3> 
    <h3> la media della somma delle cifre è ${media}.</h3>`;
    
});

