var meuVetor = ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4'];

var meuVetor2 = ['Situação: Aprovado', 'Situação: Recuperação', 'Situação: Reprovado'];

document.querySelector('#btnMedia').addEventListener('click', function(){
    meuVetor[0] = document.querySelector('#Nota1').value;
    meuVetor[1] = document.querySelector('#Nota2').value;
    meuVetor[2] = document.querySelector('#Nota3').value;
    meuVetor[3] = document.querySelector('#Nota4').value;

    meuVetor[0] = parseFloat(meuVetor[0]);
    meuVetor[1] = parseFloat(meuVetor[1]);
    meuVetor[2] = parseFloat(meuVetor[2]);
    meuVetor[3] = parseFloat(meuVetor[3]);

    var resultado = (meuVetor[0] + meuVetor[1] + meuVetor[2] + meuVetor[3]) / 4;

    var texto = 'Sua média é ' + resultado + '.';

    document.querySelector('.media').innerHTML = texto;

    if (resultado >= 7){

        document.querySelector('.status').innerHTML = meuVetor2[0];
    }

    else if (resultado >= 5 && resultado < 7){

        document.querySelector('.status').innerHTML = meuVetor2[1];
    }

    else
    {

        document.querySelector('.status').innerHTML = meuVetor2[2];
    }

});