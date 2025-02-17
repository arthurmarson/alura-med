document.addEventListener("DOMContentLoaded", function () { // Aguarda o carregamento completo do DOM antes de executar o script
    const botaoPlus = document.getElementById("botao-flutuante__plus");
    const listaFlutuante = document.getElementById("botao-flutuante__lista");
    const overlay = document.getElementById("overlay");

    botaoPlus.addEventListener("click", function () {
        // Verifica se a lista já está ativa (visível)
        const ativo = listaFlutuante.classList.contains("ativo");

        // Se estiver ativa, remove a classe "ativo" para escondê-la e esconde o overlay
        if (ativo) {
            listaFlutuante.classList.remove("ativo");
            overlay.classList.remove("ativo");
        } else { // Se não estiver ativa, adiciona a classe "ativo" para exibi-la e mostra o overlay
            listaFlutuante.classList.add("ativo");
            overlay.classList.add("ativo");
        }
    });

    // Clicar no overlay fecha a lista
    overlay.addEventListener("click", function () {
        listaFlutuante.classList.remove("ativo");
        overlay.classList.remove("ativo");
    });
});
