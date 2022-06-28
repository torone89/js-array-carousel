
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande 
// in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci 
// poi concentrare solamente sull'aspetto logico.

// // Variabile per le immagini attive
// let activeIndex = 0

// Mi recupero tutte le immagini dal DOM
// const immagini = document.querySelectorAll("#carousel img")

// // Decido che la prima immagine sia quella di default per vederla

// immagini[activeIndex].classList.add('active')

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito 
// e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri
//  metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider,
//   ma costruito dinamicamente attraverso



// Mi recupero tutte le immagini per l'array

const sources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

console.log(sources)

//  recupero la galleria dove mettere le immmagini

const contenitore = document.getElementById("galleria")
console.log(contenitore)

const thumbnails = document.getElementById("thumb")

// // Variabile per le immagini attive
let activeIndex = 0


for (let i = 0; i < sources.length; i++) {


    contenitore.innerHTML += `<img class="item" src="${sources[i]}" alt="immagine-${i}">`

    thumbnails.innerHTML += `<img class="scale" src="${sources[i]}" alt="immagine-${i}">`

}

// Prendo le classi item&scale dal css per attivare disattivare stili sulle immagini

document.getElementsByClassName('item')[activeIndex].classList.add('active');

document.getElementsByClassName('scale')[activeIndex].classList.add('scaleactive');


// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
// e sul thumbnail cambia il grayscale e si aggiunge una boxshadow

// Aggiungo i bottoni 

const prima = document.getElementById('prima');
const dopo = document.getElementById('dopo');
console.log(prima, dopo)

// Aggiungo la listener al button

dopo.addEventListener('click', function () {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // incremento activindex 
    activeIndex++;

    // RIPARTO DA 0 quando arrivo in fondo alle immagini
    if (activeIndex > sources.length - 1) {


        activeIndex = 0;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[activeIndex].classList.add('active');
    document.getElementsByClassName('scale')[activeIndex].classList.add('scaleactive');
})

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima 
// e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura s
// e l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.


prima.addEventListener('click', function () {
    //rimuovo la classe active
    document.querySelector(".active").classList.remove('active')
    document.querySelector(".scaleactive").classList.remove('scaleactive')

    // RIPARTO DA 0 quando arrivo in fondo alle immagini
    activeIndex--

    if (activeIndex < 0) {
        activeIndex = sources.length - 1;
    }

    // aggiungo la classe active
    document.getElementsByClassName('item')[activeIndex].classList.add('active');
    document.getElementsByClassName('scale')[activeIndex].classList.add('scaleactive');
})




