//cria a variável para servir de intervalo
var interval;

var tempo = 0;

document.querySelector("#btnIniciar").addEventListener('click', function(){
    //inicia a execução do intervalo e se repetirá a cada 1000 milisegundos;
    interval = setInterval(AtualizaTempo, 1000);
});

function AtualizaTempo(){
    //contabiliza mais um no tempo
    tempo++;

    //escreve a hora no parágrafo
    document.querySelector("#resultado").innerHTML = tempo +
    ' segundo(s)';
}

document.querySelector("#btnPausar").addEventListener('click', function(){
    //aborta a execução do intervalo
    clearInterval(interval);
});

document.querySelector("#btnParar").addEventListener('click', function(){
    //aborta a execução do intervalo
    clearInterval(interval);
    //reinicia o tempo
    tempo = 0;
    //limpar o campo
    document.querySelector("#resultado").innerHTML = '';
});