
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande 
// in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci 
// poi concentrare solamente sull'aspetto logico.

// Variabile per le immagini attive
let activeIndex = 0

// Mi recupero tutte le immagini dal DOM
const immagini = document.querySelectorAll("#carousel img")

// Decido che la prima immagine sia quella di default per vederla

immagini[activeIndex].classList.add('active')

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito 
// e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri
//  metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider,
//   ma costruito dinamicamente attraverso


// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.