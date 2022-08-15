const messages = [
    "Logging into the bank's mainframe",
    'Bypassing the two-step authentication',
    'Reading data',
    'Processing',
];

document.querySelector('#message').textContent = messages[0] + '...';

for (let i = 1; i < messages.length; i++) {
    setTimeout(() => {
        document.querySelector('#message').textContent = messages[i] + '...';

        if (i === messages.length - 1) {
            setTimeout(() => {
                window.location.href = '/yay?successUrl=' + document.querySelector('#successUrl').value + '&failureUrl=' + document.querySelector('#failureUrl').value;
            }, 2000);
        }

    }, 2000 * i);


}