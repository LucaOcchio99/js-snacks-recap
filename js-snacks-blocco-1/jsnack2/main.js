//Il software deve chiedere per 5 volte all’utente di inserire
// un numero.
//Il programma stampa la somma di tutti i numeri inseriti con for
//e opzionalmente con while (edited)

let totale = 0;
for (let i = 0; i < 5; i++) {
    const numeri = parseInt(prompt('Inserisci un numero'));
    totale = totale + numeri;
}
console.log(totale);


//versione while 
//let count = 0;
//while(count < 5) {
 //   const nuovoNumero = parseInt(prompt('Inserisci numero'));
   // somma += nuovoNumero;

  //  count++;
//}

//console.log(`La somma dei numeri inseriti è ${somma}`);