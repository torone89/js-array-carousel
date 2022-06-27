
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


// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.

// Mi recupero tutte le immagini per l'array

const immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"]
console.log(immagini)

//  recupero la galleria dove mettere le immmagini

const contenitore = document.getElementById("galleria")
console.log(contenitore)

// // Variabile per le immagini attive
let activeIndex = 0
immagini[activeIndex].classList.add("active")
contenitore.innerHTML = `
              <img src="${immagini[activeIndex]}" alt="immagine-${activeIndex}"`



for (let activeIndex = 0; activeIndex < immagini.length; activeIndex++) {



    if (activeIndex === immagini.length) {
        immagini[activeIndex].classList.remove("active")
        contenitore.innerHTML = `
          <img src="${immagini[activeIndex]}" alt="immagine-${activeIndex}"
         
              `

    }

}


console.log(immagini[activeIndex])



console.log(activeIndex)