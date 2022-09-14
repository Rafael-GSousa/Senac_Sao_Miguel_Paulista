function Calcular()
{
    // captura informações de um campo da tela a partir de seu ID
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    // converte este valor em número
    peso = parseFloat(peso);
    altura = parseFloat(altura);


    // efetua o cálculo do resultado
    var resultado = (peso / altura**2);

    // exibe o resultado em uma janela
    alert('Seu IMC é: ' + resultado);


}

