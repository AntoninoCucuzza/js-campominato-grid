console.log('wewe');

/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/
const fieldEl = document.querySelector('.container_field');

let limit = 100


function griglia(limit) {
    
    for (let i = 0; i < limit; i++) {
        const casellaEL = document.createElement('div')
        casellaEL.classList.add('box')
        casellaEL.append(i + 1)
        fieldEl.append(casellaEL)

        casellaEL.addEventListener('click', function(){
            casellaEL.classList.toggle('bg_active') 
            casellaEL.append()
            console.log(`e stata attivata la casella ${i + 1}`);
          
        })
    } 
    
}


const bottone = document.querySelector('.btn')

bottone.addEventListener('click', function(){
    griglia(limit)

}, {once : true})
