//cria a variável para servir de timeout
var timeout;

document.querySelector("#btnIniciar").addEventListener('click', function(){
    //inicia a execução da função AtualizaHora após 3000 milisegundos;
    timeout = setTimeout(AtualizaHora, 3000);
})

//função que contém a ação
function AtualizaHora(){
    //escreve a hora no parágrafo
    document.querySelector("#resultado").innerHTML = 
    'A hora atual é ' + new Date().toLocaleTimeString();
}

document.querySelector("#btnParar").addEventListener('click', function(){
    //aborta a execução do intervalo
    clearTimeout(timeout);
})
