let phoneScreen = document.getElementById('phone-screen');

function dialNumber(number) {
    phoneScreen.innerHTML += number;
}

function call() {
    phoneScreen.innerHTML = "Calling...<br>";
    phoneScreen.classList.add('phone-digitos')
    setTimeout(function() {
        phoneScreen.innerHTML += "Connected!";
    }, 2000);
}

// limpa o que estiver digitado no visor
document.querySelector('#phoneScreenReset').addEventListener('click', () => {
    phoneScreen.innerHTML = '';
})