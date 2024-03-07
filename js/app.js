console.log('JS funziona')


/*richiamo l'elemento in cui scrivera' la mail l'utente*/

let inputEmailElement = document.getElementById('input-email');
// console.log(inputEmailElement)

/*richiamo il button per il click*/
let buttonEmailElemnt = document.getElementById('button-email')
// console.log(buttonEmailElemnt)

/*richiamo div della ricerca della mail*/
let mailSearchResult = document.getElementById('reselt-search-email')

/*creo l'array contenente le mail*/
const emails = ['giovanni@boolean.com', 'davide@boolean.com', 'giulio@boolean.com', 'carmine@boolean.com', 'pietro@boolean.com']


/*creo l'evento al click sul button*/

buttonEmailElemnt.addEventListener('click', function(){

/*prendo il value dall'input*/
    const userEmail = inputEmailElement.value;
    // console.log(userEmail) 
    

/*creo la variabile esterna all'if*/
    let isEmailInList = false;

    if (emails.includes(userEmail)) {
        // console.log('trovata!')
        mailSearchResult.innerHTML = `<h3>La tua mail è stata trovata!!!</h3>`
    } else {
        mailSearchResult.innerHTML = `<h3>La tua mail NON è stata trovata!!!</h3>`
    }





})


























