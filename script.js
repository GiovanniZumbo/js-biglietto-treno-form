// PLANNING

/* BASIC VERS.
Recupero gli elementi dal DOM / Get elements from the DOM
Creare una variabile per il costo per chilometro / Make a price/distance var
Creare una variabile per lo sconto / Make a discount var
Chiedere il numero di chilometri da percorrere. / Request travel distance
Chiedere l'età del passeggero. / Request traveller age
Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket
Calcolare il prezzo del biglietto con lo sconto. / Calculate reduced price ticket
Stampare il risultato / Output the result

*/

/* MILESTONE 1
Recupero gli elementi dal DOM / Get elements from the DOM


*/

// # STAGING

// * Recupero gli elementi dal DOM / Get elements from the DOM

const totalElement = document.getElementById('total')
const discountElement = document.getElementById('discount')

// ? Form

const distanceInput = document.getElementById('distance')
const ageInput = document.getElementById('age')

const submitButton = document.getElementById('submit-button')
const deleteButton = document.getElementById('delete-button')

// * Creare una variabile per il costo per chilometro / Make a price/distance var
const priceUnit = 0.21;

// * Creare il messaggio

const message = `Il costo del tuo biglietto è: €`

// * Creare una variabile per lo sconto / Make a discount var

let discount = null;

// # DATA GATHERING 


// # EVENT HANDLING

submitButton.addEventListener('click', function (e) {
    e.preventDefault();


    // * Chiedere il numero di chilometri da percorrere. / Request travel distance

    const distance = parseInt(distanceInput.value);
    console.log('distance', distance);

    // * Chiedere l'età del passeggero. / Request traveller age

    const age = parseInt(ageInput.value);
    console.log('age', age);


    // # PROCESSING

    // @VALIDATION

    if (isNaN(distance) || isNaN(age) || distance <= 0 || age <= 0) {
        alert('I dati inseriti non sono validi')
    } else {

        // * Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket

        const ticketPrice = parseInt(distance * priceUnit);
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
            console.log('finalPrice', finalPrice.toFixed(2))
        }


        // # OUTPUT 

        // * Stampare il risultato / Output the result

        totalElement.innerHTML = message + finalPrice.toFixed(2);

    }

})

deleteButton.addEventListener('click', function () {
    form.reset();
}
)
