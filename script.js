
// Função para verificar se o cinto de carro está afivelado
function verificarCinto() {

    // Suponha que você tenha um input no seu HTML com o id "cintoCarro"
    var cintoCarro = document.getElementById("cintoCarro");

    // Verifica se o cinto está afivelado
    if (cintoCarro.checked) {
        alert("Cinto de carro afivelado. Dirija com segurança!");
    } else {
        alert("Cinto de carro não afivelado. Afivele antes de dirigir!");
    }
}


