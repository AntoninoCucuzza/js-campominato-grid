console.log('wewe');

/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/
const fieldEl = document.querySelector('.container');

let limit = 100


function griglia(limit) {
    for (let i = 0; i < limit; i++) {
        console.log('ciao');
        const markup = `<div class="box">${i + 1}</div>`
        fieldEl.innerHTML += markup




    } 
}

griglia(limit)