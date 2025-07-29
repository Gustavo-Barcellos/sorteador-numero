function sortear() {

    //Criar variáveis com IDs de elementos que recebem retorno do usuário
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Evitar num min. > num max.
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    
    let sorteados = [];
    let numero;

    //Gerar mais de um número
    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio (de, ate);

        //Evitar gerar números repetidos
        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(de, ate);
        }

        //Incluir números gerados em array
        sorteados.push(numero);
    }

    //modificar o texto do resultado dos números sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    //Ativar botão reiniciar
    alterarStatusBotaoReiniciar();
}

//gerar um número aleatório
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let statusBotaoReiniciar = document.getElementById('btn-reiniciar');

    //Se a classe possui botão desabilitado, remove e adiciona botão comum.
    if (statusBotaoReiniciar.classList.contains('container__botao-desabilitado')) {
        statusBotaoReiniciar.classList.remove('container__botao-desabilitado');
        statusBotaoReiniciar.classList.add('container__botao');
    } else {
        statusBotaoReiniciar.classList.remove('container__botao');
        statusBotaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

//Limpar todos os campos
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
}