//declarando vetor
var carros = [];

//adicionando item
document.querySelector("#btnAdicionar").addEventListener("click", function(){
    //criando objeto
    var carro = new Object();

    //preenchendo propriedades
    carro.marca = document.querySelector("#txtMarca").value;
    carro.modelo = document.querySelector("#txtModelo").value;
    carro.ano = document.querySelector("#txtAno").value;
    carro.valor = document.querySelector("#txtValor").value;
    carro.kmLitro = document.querySelector("#txtKmLitro").value;

    carro.CalcularCombustivelPorQuilometro = function (km)
    {
        var calculo = km / this.kmLitro;
        return 'Você irá precisar de ' + calculo + ' litro(s)';
    }

    //adicionando no vetor
    carros.push(carro);

    CarregarTabela();
});

function CarregarTabela()
{
    //limpando os campos
    document.querySelector("#txtMarca").value = "";
    document.querySelector("#txtModelo").value = "";
    document.querySelector("#txtAno").value = "";
    document.querySelector("#txtValor").value = "";
    document.querySelector("#txtKmLitro").value = "";

    //limpa os dados do corpo da tabela
    document.querySelector("#tabelaDeCarros tbody").innerHTML = "";

    var km = document.querySelector("#txtKm").value;
    km = parseFloat(km);

    //percorrendo o vetor de carros
    carros.forEach(element => {
        //incluindo na tabela
        document.querySelector("#tabelaDeCarros tbody").innerHTML +=
        "<tr>" +
        "<td>" + element.marca + "</td>" +
        "<td>" + element.modelo + "</td>" +
        "<td>" + element.ano + "</td>" +
        "<td>" + element.valor + "</td>" +
        "<td>" + element.kmLitro + "</td>" +
        "<td>" + element.CalcularCombustivelPorQuilometro(km) + "</td>" +
        "</tr>";
    })

};

//evento para o botão btnAtualizar
document.querySelector("#btnAtualizar").addEventListener("click", function (){
    //irá carregar a tabela
    CarregarTabela();
});