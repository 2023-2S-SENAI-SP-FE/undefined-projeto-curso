
// Função para verificar se o pedal de freio está pressionado
function verificarFreio() {
    // Suponha que você tenha um input no seu HTML com o id "pedalFreio"
    var pedalFreio = document.getElementById("pedalFreio");

    // Verifica se o pedal de freio está pressionado
    if (pedalFreio.checked) {
        alert("Freio acionado. O sistema de freios está ativo!");
    } else {
        alert("Freio não acionado. Empurre para ativar o sistema de freios!");
    }
}
