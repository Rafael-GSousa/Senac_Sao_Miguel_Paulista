var meuVetor = ['Erickson', 'João', 'Francisco'];

document.addEventListener('DOMContentLoaded', function(){

    var texto = 'Posição 0: ' + meuVetor[0] + '<br>' +
                'Posição 1: ' + meuVetor[1] + '<br>' +
                'Posição 2: ' + meuVetor[2] + '<br>';

    document.querySelector('.itens').innerHTML = texto;
});

document.querySelector('#btnAdd').addEventListener('click', function(){
    var valorCampo = document.querySelector('#txtNome').value;

    // adicionando item ao vetor
    meuVetor.push(valorCampo);

    // pegando a posição do último item
    var posicao = meuVetor.length -1;

    // escrevendo texto
    var texto = 'Posição ' + posicao + ': ' + meuVetor[posicao] + '<br>';

    // escrevendo em tela
    document.querySelector('.itens').innerHTML += texto;
});

document.querySelector('#btnListarToString').addEventListener('click', function(){

    // no toString os itens ficarão separados por vírgula ','
    document.querySelector('.itens').innerHTML = meuVetor.toString();
});

document.querySelector('#btnListarJoin').addEventListener('click', function(){

    // no join é possível definir o separador
    document.querySelector('.itens').innerHTML = meuVetor.join(',<br>');
});

document.querySelector('#btnRemoverUltimo').addEventListener('click', function(){

    // remove o último item
    meuVetor.pop();

    // escreve o vetor novamente
    document.querySelector('.itens').innerHTML = meuVetor.join(',<br>');
});

document.querySelector('#btnRemoverPorNome').addEventListener('click', function(){
    // busca campo a ser removido
    var valorCampo = document.querySelector('#txtNome').value;

    // busca posição
    var posicao = meuVetor.lastIndexOf(valorCampo);

    // se encontrou o item
    if(posicao >= 0){

        // remove o item começando na posição indicada e apenas um item
        meuVetor.splice(posicao,1);
    }
    
    // escreve o vetor novamente
    document.querySelector('.itens').innerHTML = meuVetor.join(',<br>');
});