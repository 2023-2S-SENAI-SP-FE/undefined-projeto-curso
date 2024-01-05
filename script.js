function atualizarSetas(setaEsquerda, setaDireita) {
    document.querySelector("#seta-esquerda").classList.toggle("ativada", setaEsquerda);
    document.querySelector("#seta-direita").classList.toggle("ativada", setaDireita);
}

setInterval(function () {
    atualizarSeta(true, true);
}, 500);


function data() {
    const data = new Date().toLocaleString();
    return data
}
