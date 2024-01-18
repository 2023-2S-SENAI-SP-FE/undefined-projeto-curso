let phoneScreen = document.getElementById('phone-screen');
let conectado = false;
let intervalo;
let seconds = '00';
let minutes = '00';

// registra os números digitados
function dialNumber(number) {
    if (!conectado) {
        phoneScreen.classList.remove('phone-status');
        phoneScreen.innerHTML += number;
    }
}

// alterna o mute do microfone
function alternaMicrofone() {
    document.querySelector('#microfone .bi').classList.toggle('bi-mic-fill');
    document.querySelector('#microfone .bi').classList.toggle('bi-mic-mute-fill');
}

// limpa o que estiver digitado no visor
document.querySelector('#phoneScreenReset').addEventListener('click', () => {
    if (!conectado) {
        phoneScreen.innerHTML = '';
    }
})

// realiza uma chamada
function call() {
    if (!conectado && phoneScreen.innerHTML) {
        phoneScreen.innerHTML = 'Chamando';
        phoneScreen.classList.add('phone-status');
        toggleRingtone();
        setTimeout(function () {
            phoneScreen.innerHTML = 'Conectado';
            toggleRingtone();
            phoneScreen.insertAdjacentHTML('beforeend', '<br><span id="minutes">00</span>:<span id="seconds">00</span>');
            clearInterval(intervalo);
            intervalo = setInterval(startTimer, 1000);
            conectado = true;
        }, 4000);
    }
}

// contador de tempo da chamada
function startTimer() {
    let appendMinutes = document.getElementById("minutes")
    let appendSeconds = document.getElementById("seconds")

    seconds++;

    if (seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

}

// encerra a chamada ativa 
function endCall() {
    if (conectado) {
        phoneScreen.innerHTML = 'Chamada encerrada';
        setTimeout(() => {
            phoneScreen.innerHTML = '';
        }, 1500);
        conectado = !conectado;
        clearInterval(intervalo);
        seconds = '00';
        minutes = '00';
    }
}

