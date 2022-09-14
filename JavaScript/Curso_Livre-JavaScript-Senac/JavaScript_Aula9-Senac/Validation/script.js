$(document).ready(function () {
    //valida o formulário de id meuForm
    $("#meuForm").validate({
        //regras de validação
        rules: {
            txtNome: {
                required: true,
                minlength: 2,
            },
            txtEmail: {
                required: true,
                email: true,
            },
            txtCPF: {
                CPF: true
            }
        },

        //mensagens específicas deste formulário
        messages: {
            txtNome: {
                //texto a ser exibido quando o campo não tiver preenchido
                required: "Entre com um nome válido",
                minlength: "Por favor entre com no mínimo {0} caracteres"
            },
            txtEmail: {
                //texto a ser exibido quando o campo não estiver preenchido
                required: "Entre com um e-mail válido",
                email: "Digite um e-mail válido"
            },
            txtCPF: {
                //texto a ser exibido quando o campo não estiver preechido
                CPF: "Digite um CPF válido"
            },
        },
        submitHandler: function (form) {
            //ação a ser efetuada quando o formulário é enviado e não possi erros
            alert("Formulário enviado com sucesso");
        }
    });
})

//função para determinar se o CPF é válido, retornando true para válido
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

//adicionando tipo de validação CPF para o jQuery Validator
jQuery.validator.addMethod('CPF', function (value){
    return TestaCPF(value);
});