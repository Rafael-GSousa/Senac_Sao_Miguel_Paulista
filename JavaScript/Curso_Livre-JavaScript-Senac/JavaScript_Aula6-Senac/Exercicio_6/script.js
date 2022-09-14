var idade = [];



document.querySelector("#btnAdicionar").addEventListener('click', function(){
    //busca o conteúdo da tela
    var valor = document.querySelector('#txtIdade').value;
    valor = parseInt(valor);
    //adicionando nome no vetor
    idade.push(valor);
    //limpa o campo
    document.querySelector('#txtIdade').value = "";
    //coloca o foco no campo
    document.querySelector('#txtIdade').focus();
})

document.querySelector("#btnCalcular").addEventListener('click', function(){
    //limpa a lista
    document.querySelector("#media").innerHTML = "";

    var acima = 0;
    var entre = 0;
    var abaixo = 0;
    var soma = 0;

//percorre os itens do vetor
for (const key in idade) {
    //verifica se realmente é um vetor
    if (idade.hasOwnProperty(key)) {
        //busca o elemento no vetor com a posição informada pela key
        const element = idade[key];

        //se o valor for vazio, pula para o próximo
        if(element > 65)
        {
            acima++;
        }
        else if(element >= 18)
        {
            entre++;
        }
        else
        {
            abaixo++;
        }
        //soma o valor acumulado
        soma += element;
    }
    }

            var media = soma / (acima + entre + abaixo);
            
            //insere o elemento na tela
            document.querySelector("#media").innerHTML +=
            "Idade média do grupo: " + media + ";<br>"
            + "Pessoas acima dos 65 anos: " + acima + ";<br>" 
            + "Pessoas entre 18 e 65 anos: " + entre + ";<br>" 
            + "Pessoas abaixo dos 18 anos: " + abaixo + ".";
            
})