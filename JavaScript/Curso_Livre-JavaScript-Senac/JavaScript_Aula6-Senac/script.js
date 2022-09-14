document.querySelector("#btnGerarDados").addEventListener('click', function(){
    //busca o conteúdo da tela
    var total = document.querySelector('#txtQuantidade').value;

    //converte para inteiro
    total = parseInt(total);

    //cria variável para servir de contador
    var contador = 0;

    //repete enquanto o contador for menor que o total
    while (contador < total)
    {
        //adiciona um item na lista
        document.querySelector("#lista").innerHTML += "<li>" + Math.random() + "</li>";
        
        //adiciona mais 1 ao contador
        contador++;
    }
})