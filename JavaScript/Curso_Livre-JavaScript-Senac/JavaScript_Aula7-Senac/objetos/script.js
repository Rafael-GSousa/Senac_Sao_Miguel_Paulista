//declarando vetor
var carros = [];

    
//adicionando item
document.querySelector("#btnAdicionar").addEventListener("click", function () {
    //criando objeto
    var carro = new Object();

    //preenchendo propriedades
    carro.marca = document.querySelector("#txtMarca").value;
    carro.modelo = document.querySelector("#txtModelo").value;
    carro.ano = document.querySelector("#txtAno").value;
    carro.valor = document.querySelector("#txtValor").value;
    carro.kmLitro = document.querySelector("#txtKmLitro").value;

    //implementando a função
    carro.CalcularCombustivelPorQuilometro = function (km) 
    {
        var calculo = km / this.kmLitro;
        return 'Você irá precisar de ' + calculo + ' litro(s)';
    };
    carro.CalcularValorDoCombustivel = function (km, valor)
    {
        var calculo = (km / this.kmLitro) * valor;
        return 'Você vai gastar R$' + calculo;
    };


    //adicionando no vetor
    carros.push(carro);

    //carregar tabela
    CarregarTabela();
});

function CarregarTabela() {
    //limpando os campos 
    document.querySelector("#txtMarca").value = "";
    document.querySelector("#txtModelo").value = "";
    document.querySelector("#txtAno").value = "";
    document.querySelector("#txtValor").value = "";
    document.querySelector("#txtKmLitro").value = "";

    //limpa os dados do corpo da tabela
    document.querySelector("#tabelaDeCarros tbody").innerHTML = "";

    //km informados em tela
    var km = document.querySelector('#txtKm').value;
    km = parseFloat(km);

    var valor = document.querySelector('#txtvalor').value;
    valor = parseFloat(valor);

    

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
            "<td>" + element.CalcularValorDoCombustivel(km, valor) + "</td>" +
            "</tr>";
    });
};


document.querySelector("#btnAtualizar").addEventListener("click", function () {
    CarregarTabela();


});