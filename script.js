let phoneScreen = document.getElementById('phone-screen');

function dialNumber(number) {
    phoneScreen.classList.remove('phone-status');
    phoneScreen.innerHTML += number;
}


// realiza uma chamada
function call() {
    phoneScreen.innerHTML = 'Ligando...<br>';
    phoneScreen.classList.add('phone-status')
    setTimeout(function() {
        phoneScreen.innerHTML = 'Conectado';
    }, 2000);
}

// encerra a chamada ativa 
function endCall() {
    phoneScreen.innerHTML = 'Encerrando...';
    setTimeout(() => {
        phoneScreen.innerHTML = '';
    }, 1000);
}

// limpa o que estiver digitado no visor
document.querySelector('#phoneScreenReset').addEventListener('click', () => {
    phoneScreen.innerHTML = '';
})