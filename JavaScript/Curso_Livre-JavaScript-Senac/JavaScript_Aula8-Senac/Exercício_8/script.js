var interval;

var tempo = 0;

document.querySelector("#btnIniciar").addEventListener('click', function(){

    tempo = document.querySelector("#tempo").value;
    tempo = parseInt(tempo);

    interval = setInterval(AtualizaTempo, 1000);
});

function AtualizaTempo(){

    tempo--;

    document.querySelector("#resultado").innerHTML = tempo +
    ' segundo(s)';

    if(tempo === 0){
        alert('Seu tempo acabou!');
        clearInterval(interval);
    }
}
