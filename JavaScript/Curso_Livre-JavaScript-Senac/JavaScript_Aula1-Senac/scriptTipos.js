var primeiroNumero = 10;
var segundoNumero = 5;

alert(primeiroNumero + segundoNumero);


// verificação do tipo da variável
alert(typeof(primeiroNumero));

//variável do tipo string, sempre entre aspas simples ou duplas
primeiroNumero = '10';

alert(typeof(primeiroNumero));

//variável do tipo boolean (true ou false)
primeiroNumero = false;
alert(typeof(primeiroNumero));

//variável do tipo object
var dataDeNascimento = new Date(); //pega a data e hora atuais do computador
alert(typeof(dataDeNascimento));
alert(dataDeNascimento);