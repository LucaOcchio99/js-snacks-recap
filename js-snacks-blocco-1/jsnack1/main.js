//L’utente inserisce due parole in successione, 
//con due prompt.
//Il software stampa prima la parola più corta, 
//poi la parola più lunga

const prima_parola = prompt('Inserisci una prima parola');
console.log(`La prima parola inserita dall'utente è ${prima_parola}`);

const seconda_parola = prompt(`Inserisci una seconda parola`);
console.log(`La seconda parola inserita dall'utente è ${seconda_parola}`);

if (prima_parola.length == seconda_parola.length) {
    console.log(`${prima_parola} e ${seconda_parola} sono lunghe uguali`);
} else if (prima_parola.length > seconda_parola.length) {
     console.log(`La prima parola inserita, ovvero: ${prima_parola} è più lunga della seconda parola inserita, cioè: ${seconda_parola}`);
} else {
    console.log(`La seconda parola inserita, ovvero: ${seconda_parola} è più lunga della prima parola inserita, cioè: ${prima_parola}`);
}