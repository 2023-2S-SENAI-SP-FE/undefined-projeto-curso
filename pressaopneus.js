
function gerarNumero() {
    return Math.floor(Math.random() * 35);
}
function atualizarNumeros() {
    const numeroSuperior1 = gerarNumero();
    const numeroSuperior2 = gerarNumero();
    const numeroInferior1 = gerarNumero();
    const numeroInferior2 = gerarNumero();
    document.getElementById('numero-superior').innerHTML = `
        <p>${numeroSuperior1}</p>
        <p>${numeroSuperior2}</p>
    `;
    document.getElementById('numero-inferior').innerHTML = `
        <p>${numeroInferior1}</p>
        <p>${numeroInferior2}</p>
    `;
}
atualizarNumeros();
setInterval(atualizarNumeros, 30000000);