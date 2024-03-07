console.log('JS funziona');


/*richiamo l'elemento in cui scrivera' la mail l'utente*/

let inputEmailElement = document.getElementById('input-email');
// console.log(inputEmailElement)

/*richiamo il button per il click*/
let buttonEmailElemnt = document.getElementById('button-email');
// console.log(buttonEmailElemnt)

/*richiamo div della ricerca della mail*/
let mailSearchResult = document.getElementById('result-search-email');

/*creo l'array contenente le mail*/
const emails = ['giovanni@boolean.com', 'davide@boolean.com', 'giulio@boolean.com', 'carmine@boolean.com', 'pietro@boolean.com'];


/*creo l'evento al click sul button*/

buttonEmailElemnt.addEventListener('click', function(){

/*prendo il value dall'input*/
    const userEmail = inputEmailElement.value;
    // console.log(userEmail) ;
    let emailFound = false;
    for (let i = 0; i < emails.length; i++) {
        // console.log(emails[i]);
        if (userEmail === emails[i]) {
            console.log('email in archivio')
            emailFound = true;
        } 


    }
    
    if (emailFound === true) {
        // console.log('trovata!')
        mailSearchResult.innerHTML = `<h3 class="d-inline-block">La tua mail è stata trovata!!!</h3>`;
    } else {
        mailSearchResult.innerHTML = `<h3 class="d-inline-block">La tua mail NON è stata trovata!!!</h3>`;
    }


    // if (emails.includes(userEmail)) {
    //     // console.log('trovata!')
    //     mailSearchResult.innerHTML = `<h3 class="d-inline-block">La tua mail è stata trovata!!!</h3>`;
    // } else {
    //     mailSearchResult.innerHTML = `<h3 class="d-inline-block">La tua mail NON è stata trovata!!!</h3>`;
    // }





})

/*-----------GIOCO DEI DADI--------------*/

let buttonDiceElement = document.getElementById('button-dice');
let diceContainerElement = document.getElementById('dice-container');


buttonDiceElement.addEventListener('click', function() {

    /*creare variabile per il risultato fuori dall'if*/
    // diceContainerElement.innerHTML = ""
    let result = "";

    //creare un numero random da 1 a 6 per il player
    const randomUserNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(randomUserNumber);
    result += (`<h5>Player</h5>` + ' ' + randomUserNumber);
    //creare un numero random da 1 a 6 per il computer

    const randomComputerNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(randomComputerNumber);
    result += (`<h5>Computer</h5>` + ' ' + randomComputerNumber);

    //verificare quale dei due numeri e' piu' grande

    if (randomUserNumber > randomComputerNumber) {
        // console.log('user winner') ;
        result += (`<h3>Player Winner!!!</h3>`);
    } else if (randomUserNumber < randomComputerNumber) {
        // console.log('computer winner');
        result += (`<h3>Computer Winner!!!</h3>`);
    } else {
        // console.log('draw');
        result += (`<h3>Dice are DRAW!!!</h3>`);
    }

    diceContainerElement.innerHTML = result

});
/*stampare sul dom il risultato*/
























