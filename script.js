let phoneScreen = document.getElementById('phone-screen');
let conectado = false;

function dialNumber(number) {
    if (!conectado) {
        phoneScreen.classList.remove('phone-status');
        phoneScreen.innerHTML += number;
    }
}

// realiza uma chamada
function call() {
    phoneScreen.innerHTML = 'Ligando...<br>';
    phoneScreen.classList.add('phone-status')
    setTimeout(function() {
        phoneScreen.innerHTML = 'Conectado';
    }, 2000);
    conectado = true;
}

// encerra a chamada ativa 
function endCall() {
    if (conectado) {
        phoneScreen.innerHTML = 'Encerrando...';
        setTimeout(() => {
            phoneScreen.innerHTML = '';
        }, 1000);
        conectado = !conectado;
    }
}

// alterna o mute do microfone
document.querySelector('#toggleMicrofone').addEventListener('click', e => {
    e.target.querySelector('i').classList.toggle('bi-mic-fill');
    e.target.querySelector('i').classList.toggle('bi-mic-mute-fill');
})

// limpa o que estiver digitado no visor
document.querySelector('#phoneScreenReset').addEventListener('click', () => {
    if (!conectado) {
        phoneScreen.innerHTML = '';
    }
})