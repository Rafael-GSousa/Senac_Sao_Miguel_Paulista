//ao executar o iniciar
$(document).ready(function () {

    //carregar lista de clientes
    CarregarLista();

    //configurando validação do formulário
    $("#formulario").validate({
        //regras de validação
        rules: {
            Nome: {
                required: true
            },
            CPF: {
                required: true,
                cpf: true
            }
        },
        //classe de erro
        errorClass: "text-danger"
    });
})

//botão incluir cliente
$('#btnNovoCliente').click(function (){

    //resetando o formulário
    $("#formulario").each(function () {
        //limpando o formulário
        this.reset();
        //resetando a validação
        $(this).validate().resetForm();
    });

    //janela de diálogo para novo cliente
    $('#janelaFormulario').dialog({
        title: 'Novo Cliente', //título da janela
        modal: true, //abrir com modal
        height: 'auto', //altura padrão
        width: 600, //largura de 600px
        buttons: {//botões
            Salvar: function (){
                //botão salvar
                var valido = $("#formulario").valid();

                if(valido)
                {

                    //criando um objeto cliente
                    var cliente = new Object();

                    //preenchendo os dados do cliente
                    cliente.cpf = $('#CPF').val();
                    cliente.nome = $('#Nome').val();
                    cliente.endereco = new Object();
                    cliente.endereco.cidade = $('#Cidade').val();
                    cliente.endereco.estado = $('#Estado').val();
                    cliente.endereco.complemento = $('#Complemento').val();
                    cliente.endereco.logradouro = $('#Logradouro').val();
                    cliente.endereco.numero = $('#Numero').val();

                    //instância de api de clientes
                    var api = ApiClientes();

                    //incluindo um novo cliente
                    api.incluir(cliente, CarregarLista, acaoErro);

                }
            }}
    })
})

//ação a ser executada caso der sucesso
function CarregarLista() {
    //instância de objeto para conexão com a API
    var api = ApiClientes();

    //método de listagem de clientes da api de clientes
    api.listar(function (data) {
        //criando variável para concatenar os textos
        var texto = '';

        //percorrendo todos os clientes
        data.forEach(cliente => {
            texto +=
            '<tr>' +
            '<td>' + cliente.cpf + '</td>' +
            '<td>' + cliente.nome + '</td>' +
            '<td>' + cliente.endereco.cidade + '</td>' +
            '<td>' + cliente.endereco.estado + '</td>' +
            '<td><button class="btn btn-sm btn-primary" onclick="alterarCliente(' + cliente.id + ')">Alterar</button></td>' +
            '<td><button class="btn btn-sm btn-danger" onclick="excluirCliente(' + cliente.id + ')">Excluir</button></td>' +
            '</tr>';
        });

        //preenchendo a tabela com o texto
        $('#tabelaClientes tbody').html(texto);
    }, acaoErro);

    //força abrir e fechar a janela
    $('#janelaFormulario').dialog().dialog('close');

}

function acaoErro()
{
    alert('Ocorreu um erro!');
}

//função para botão excluir da tabela
function excluirCliente(id) {
    //abre a janela de confirmação
    $("#confirmacao").dialog({
        title: 'Excluir Cliente', //título da janela
        modal: true, //abrir como modal
        height: 'auto', //altura automática
        width: 400, //largura de 400px
        buttons: {//botões
        "Sim": function () {//botão sim
        //instância de objeto da api de clientes
        var api = ApiClientes();
        //excluir cliente
        api.excluir(id, CarregarLista, acaoErro);
        $("#confirmacao").dialog('close');
    }
}
    });
}

//função para o botão alterar da tabela
function alterarCliente(id) {
    //instância da api de clientes
    var api = ApiClientes();

    //consultar cliente
    api.consultar(id,
        function (cliente) {
            //preenche os dados do cliente na tela
            $('#Id').val(cliente.id);
            $('#CPF').val(cliente.cpf);
            $('#Nome').val(cliente.nome);
            $('#Cidade').val(cliente.endereco.cidade);
            $('#Estado').val(cliente.endereco.estado);
            $('#Complemento').val(cliente.endereco.complemento);
            $('#Numero').val(cliente.endereco.numero);
            $('#Logradouro').val(cliente.endereco.logradouro);

            //abre a janela
            $("#janelaFormulario").dialog({
                title: 'Alterar Cliente', //título da janela
                modal: true, //abre como modal
                height: 'auto', //altura automática
                width: 600, //largura de 600px
                buttons: {//botões
                    "Salvar": function () {//botão salvar
                    
                        //verifica se o formulário está válido, caso contrário, já retorna.
                        if (!$("#formulario").valid())
                            return;

                        //criando objeto para cliente
                        var cliente = new Object();

                        //preenchendo dados do cliente
                        cliente.id = $('#Id').val();
                        cliente.cpf = $('#CPF').val();
                        cliente.nome = $('#Nome').val();
                        cliente.endereco = new Object();
                        cliente.endereco.cidade = $('#Cidade').val();
                        cliente.endereco.estado = $('#Estado').val();
                        cliente.endereco.complemento = $('#Complemento').val();
                        cliente.endereco.numero = $('#Numero').val();
                        cliente.endereco.logradouro = $('#Logradouro').val();

                        //instância da api de clientes
                        var api = ApiClientes();

                        //altera o cliente
                        api.alterar(cliente, CarregarLista, acaoErro);
                    }

                }
            });

        }, acaoErro);
}