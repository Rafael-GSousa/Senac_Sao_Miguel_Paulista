document.querySelector("#txtIdade").addEventListener("change", function(){
var idade = document.querySelector("#txtIdade").value;
idade = parseFloat(idade);

var resultado = '';

//executa o bloco de código somente se a idade for menor que 16
if (idade < 16)
{
    resultado = 'Você não pode votar';

}
else if (idade < 18 || idade >= 65)
{
    resultado = 'Você pode votar';
}
else
{
    resultado = 'Você deve votar'
}

//escreve dentro do item que tem o id resultado
document.querySelector("#resultado").innerHTML = resultado;
});