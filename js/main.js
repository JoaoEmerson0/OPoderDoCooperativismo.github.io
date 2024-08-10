// Configuração para a imagem e botões do Copacol
const imagem_copacol = document.getElementById('copacol-img');
const botaoAmpliar_copacol = document.getElementById('botao-ampliar-copacol');
const botaoReduzir_copacol = document.getElementById('botao-reduzir-copacol');

function atualizarBotoes_copacol() {
    if (imagem_copacol.classList.contains('ampliada')) {
        botaoAmpliar_copacol.style.display = 'none';
        botaoReduzir_copacol.style.display = 'block';
    } else {
        botaoAmpliar_copacol.style.display = 'block';
        botaoReduzir_copacol.style.display = 'none';
    }
}

botaoAmpliar_copacol.addEventListener('click', function() {
    imagem_copacol.classList.add('ampliada');
    atualizarBotoes_copacol();
});

botaoReduzir_copacol.addEventListener('click', function() {
    imagem_copacol.classList.remove('ampliada');
    atualizarBotoes_copacol();
});

// Configuração para a imagem e botões do Sicoob
const imagem_sicoob = document.getElementById('sicoob-img');
const botaoAmpliar_sicoob = document.getElementById('botao-ampliar-sicoob');
const botaoReduzir_sicoob = document.getElementById('botao-reduzir-sicoob');

function atualizarBotoes_sicoob() {
    if (imagem_sicoob.classList.contains('ampliada')) {
        botaoAmpliar_sicoob.style.display = 'none';
        botaoReduzir_sicoob.style.display = 'block';
    } else {
        botaoAmpliar_sicoob.style.display = 'block';
        botaoReduzir_sicoob.style.display = 'none';
    }
}

botaoAmpliar_sicoob.addEventListener('click', function() {
    imagem_sicoob.classList.add('ampliada');
    atualizarBotoes_sicoob();
});

botaoReduzir_sicoob.addEventListener('click', function() {
    imagem_sicoob.classList.remove('ampliada');
    atualizarBotoes_sicoob();
});

// Inicializa o estado dos botões com base no estado inicial das imagens
atualizarBotoes_copacol();
atualizarBotoes_sicoob();
