function exibirMensagem() {
    // Pega os valores dos campos de input
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const linguagem = document.getElementById("linguagem").value;

    // Exibe a mensagem personalizada
    const mensagem = `Top ${nome}!! você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    document.getElementById("mensagem").textContent = mensagem;
}