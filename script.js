// PLANNING

/*
Recupero gli elementi dal DOM / Get elements from the DOM
Creare una variabile per il costo per chilometro / Make a price/distance var
Creare una variabile per lo sconto / Make a discount var
Chiedere il numero di chilometri da percorrere. / Request travel distance
Chiedere l'età del passeggero. / Request traveller age
Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket
Calcolare il prezzo del biglietto con lo sconto. / Calculate reduced price ticket
Stampare il risultato / Output the result

*/

// # STAGING

// * Recupero gli elementi dal DOM / Get elements from the DOM

const totalElement = document.getElementById('total')
const discountElement = document.getElementById('discount')

// * Creare una variabile per il costo per chilometro / Make a price/distance var
const priceUnit = 0.21;

// * Creare il messaggio

const message = `Il costo del tuo biglietto è: €`

// * Creare una variabile per lo sconto / Make a discount var

let discount = null;

// # DATA GATHERING 

// * Chiedere il numero di chilometri da percorrere. / Request travel distance

const distance = parseInt(prompt("Inserisci la distanza da percorrere (km)", 5))
console.log('distance', distance);

// * Chiedere l'età del passeggero. / Request traveller age

const age = parseInt(prompt("Inserisci la tua età", 25));
console.log('age', age);

// @ VALIDATION

if (isNaN(distance) || isNaN(age) || distance <= 0 || age <= 0) {
    alert('I dati inseriti non sono validi')
}
else {


    // # EVENT HANDLING


    // # PROCESSING


    // * Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket

    const ticketPrice = (distance * priceUnit);
    let finalPrice = ticketPrice;
    console.log('ticketPrice', ticketPrice);

    // * Calcolare il prezzo del biglietto con lo sconto. / Calculate reduced price ticket

    if (age >= 65) discount = 40;
    else if (age < 18) discount = 20;

    if (discount) {
        const discountElement = document.getElementById('discount');
        const discountMessage = `<b>Hai usufruito del ${discount}% di sconto.</b>`

        discountElement.innerHTML = discountMessage;

        discountAmount = (finalPrice / 100) * discount;

        finalPrice -= discountAmount;
    }


    // # OUTPUT 

    // * Stampare il risultato / Output the result

    totalElement.innerHTML = message + finalPrice.toFixed(2);
}