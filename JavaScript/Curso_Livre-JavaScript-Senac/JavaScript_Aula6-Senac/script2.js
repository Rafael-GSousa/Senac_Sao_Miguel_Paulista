document.querySelector("#btnGerarDados").addEventListener('click', function(){
    //busca o conteúdo da tela
    var total = document.querySelector('#txtQuantidade').value;

    //converte para inteiro
    total = parseInt(total);


    for (let index = 0; index < total; index++) {

        //adiciona um item na lista
        document.querySelector("#lista").innerHTML += "<li>" + Math.random() + "</li>";
        
    }
})