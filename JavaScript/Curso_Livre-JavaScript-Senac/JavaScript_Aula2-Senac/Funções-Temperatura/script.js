function Calcular()
{
    // captura informações de um campo da tela a partir de seu ID
    var temperatura = document.getElementById("temperatura").value;
    
    // converte este valor em número
    temperatura = parseFloat(temperatura);


    // efetua o cálculo do resultado
    var resultado = (((temperatura - 32) *5) / 9);

    // exibe o resultado em uma janela
    alert('A temperatura em Celcius é: ' + resultado);
}

