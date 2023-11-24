
// Variável para rastrear o estado do controle de tração
var controleTracaoAtivo = false;

// Função para alternar o estado do controle de tração
function alternarControleTracao() {
    controleTracaoAtivo = !controleTracaoAtivo;

    // Atualiza o texto do botão com base no estado atual
    var botaoControleTracao = document.getElementById("botaoControleTracao");
    botaoControleTracao.innerText = controleTracaoAtivo ? "Desativar Controle de Tração" : "Ativar Controle de Tração";

    // Exibe um alerta informando sobre o estado do controle de tração
    alert(controleTracaoAtivo ? "Controle de tração ativado." : "Controle de tração desativado.");
}
