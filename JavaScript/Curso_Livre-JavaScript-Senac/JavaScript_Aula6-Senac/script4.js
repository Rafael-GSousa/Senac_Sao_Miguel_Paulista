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

    //estrutura de repetição for each
    itens.forEach(element => {

        //insere o elemento na tela
        document.querySelector("#lista").innerHTML += "<li>" + element + "</li>";
        
    });
});