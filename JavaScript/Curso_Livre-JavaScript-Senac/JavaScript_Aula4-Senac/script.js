//soma >>> operador aritmético
document.querySelector("#btnSoma").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 + n2;

    //exibindo resultado
    alert(resultado);
});

//divisão >>> operador aritmético
document.querySelector("#btnDivisao").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 / n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for maior que o 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroMaiorSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 > n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for menor que o 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroMenorSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 < n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for igual ao 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroIgualSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 === n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for maior ou igual ao 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroMaiorIgualSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 >= n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for menor ou igual ao 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroMenorIgualSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 <= n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for diferente do 2º
// >>> operador lógico
document.querySelector("#btnPrimeiroDiferenteSegundo").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //efetuando cálculo
    var resultado = n1 !== n2;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for maior que o 2º e também maior que o 3º
// >>> operador lógico
document.querySelector("#btnPrimeiroMaiorTodos").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    var n3 = document.querySelector("#txtTerceiro").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    //efetuando cálculo
    //dois "&" siginifica "E", onde todas as condições devem ser atendidas para ser verdadeiro
    var resultado = n1 > n2 && n1 > n3;

    //exibindo resultado
    alert(resultado);
});

//verificação de verdadeiro (true) ou falso (false), quando o 1º for maior que o 2º e também maior que o 3º
// >>> operador lógico
document.querySelector("#btnPrimeiroMaiorOu").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
    var n2 = document.querySelector("#txtSegundo").value;
    var n3 = document.querySelector("#txtTerceiro").value;
    //convertendo para number
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    //efetuando cálculo
    //dois "|" siginifica "OU", onde pelo menos uma das condições deve ser atendida para ser verdadeiro
    var resultado = n1 > n2 || n1 > n3;

    //exibindo resultado
    alert(resultado);
});

//quando coloca um número qualquer e ele acrescenta 1
// >>> operador incremental
document.querySelector("#btnPrimeiroIncrementar").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
   //convertendo para number
    n1 = parseFloat(n1);
    //incrementar 1
    n1++,
    //exibindo resultado
    alert(n1);
});

//quando coloca um número qualquer e ele tira 1
// >>> operador incremental
document.querySelector("#btnPrimeiroDecrementar").addEventListener("click", function(){
    //capturando valores
    var n1 = document.querySelector("#txtPrimeiro").value;
   //convertendo para number
    n1 = parseFloat(n1);
    //decrementar 1
    n1--,
    //exibindo resultado
    alert(n1);
});