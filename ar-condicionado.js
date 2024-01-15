var temperaturaAtual = 20; // Temperatura inicial

function aumentarTemperatura() {
    if (temperaturaAtual < 30) { // Limite arbitrário de 30°C
        temperaturaAtual++;
        atualizarTemperatura();
    }
}

function diminuirTemperatura() {
    if (temperaturaAtual > 16) { // Limite arbitrário de 16°C
        temperaturaAtual--;
        atualizarTemperatura();
    }
}

function atualizarTemperatura() {
    document.getElementById("temperatura").innerHTML = temperaturaAtual;
}