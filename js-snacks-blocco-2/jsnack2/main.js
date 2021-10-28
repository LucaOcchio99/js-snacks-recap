//Generatore di "nomi cognomi" casuali: prendendo una
//lista di nomi e una lista di cognomi, Gatsby vuole 
//generare una falsa lista di 3 invitati

const lista_nomi = ['Lucia ', 'Samuele ', 'Giuseppe '];
const lista_cognomi = ['Carbutti','Carbonara','Scaringi']

let lista_invitati = [];
for(let i = 0; i < 3; i++) {
   lista_invitati = lista_nomi[i] + lista_cognomi[i];
   console.log(lista_invitati);
}

