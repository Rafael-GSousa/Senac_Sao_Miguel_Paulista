var itens = [];

document.querySelector("#btnAdicionar").addEventListener('click', function(){
    //busca o conteúdo da tela
    var nome = document.querySelector('#txtNome').value;
    //adicionando nome no vetor
    itens.push(nome);
    //limpa o campo
    document.querySelector('#txtNome').value = "";
    //coloca o foco no campo
    document.querySelector('#txtNome').focus();
})

document.querySelector("#btnGerar").addEventListener('click', function(){
    //limpa a lista
    document.querySelector("#lista").innerHTML = "";

//percorre os itens do vetor
for (const key in itens) {
    //verifica se realmente é um vetor
    if (itens.hasOwnProperty(key)) {
        //busca o elemento no vetor com a posição informada pela key
        const element = itens[key];
        //insere o elemento na tela
        document.querySelector("#lista").innerHTML += "<li>" + element + "</li>";
        
    }
}
})