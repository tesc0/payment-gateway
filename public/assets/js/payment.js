import testCards from './testCards.js';

let cardHtml = '';
testCards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('test-card');
    div.dataset.name = card.name;
    div.dataset.number = card.number;
    div.dataset.date = card.expiration;
    div.dataset.cvc = card.cvc;

    const i = document.createElement('i');
    i.classList.add('fab');    
    i.classList.add('fa-2x');
    i.classList.add('fa-cc-' + card.icon);
    div.append(i);

    document.querySelector('.testCards').append(div);
});

const formattedCardNumberInput = new Cleave('#cardNumber', {
    creditCard: true
});

const formattedExpirationDateInput = new Cleave('#expirationDate', {
    date: true,
    datePattern: ['m', 'y']
});

const formattedCVCInput = new Cleave('#cvc', {
    blocks: [3],
    numericOnly: true
});


document.addEventListener('click', event => {
    if (event.target.parentNode.classList.contains('test-card')) {
        const element = event.target.parentNode;

        document.querySelector('#cardNumber').value = element.dataset.number;
        document.querySelector('#cardName').value = element.dataset.name;
        document.querySelector('#expirationDate').value = element.dataset.date;
        document.querySelector('#cvc').value = element.dataset.cvc;
    }
});
