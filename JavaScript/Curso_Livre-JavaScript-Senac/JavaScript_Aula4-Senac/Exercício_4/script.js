document.querySelector('#botao').addEventListener("click", function(){

    var peso = document.querySelector("#peso").value;
    var altura = document.querySelector("#altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);
    
    var imc = (peso / altura**2);


    if (imc < 18.5)
    {
        alert('Seu IMC é ' + imc + '. Você está abaixo do peso.');
    
    }
    else if (imc >= 18.5 && imc < 25)
    {
        alert('Seu IMC é ' + imc + '. Você está com peso normal.');
    }
    else if (imc >= 25 && imc < 30)
    {
        alert('Seu IMC é ' + imc + '. Você está com sobrepeso.');
    }
    else if (imc >= 30 && imc < 35)
    {
        alert('Seu IMC é ' + imc + '. Você está com obesidade leve.');
    }
    else if (imc >= 35 && imc < 40)
    {
        alert('Seu IMC é ' + imc + '. Você está com obesidade moderada.');
    }
    else
    {
        alert('Seu IMC é ' + imc + '. Você está com obesidade alta.');
    }
})