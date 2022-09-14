//url base para api
var urlBaseApiCliente = "https://senac-crud.azurewebsites.net/api/Clientes";

function ApiClientes() {
    //instancia novo objeto para api
    var api = new Object;

    //define método para listagem
    api.listar = function (acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiCliente, //url a ser executada
            method: "GET", //tipo de método a ser executado
            success: function (data) { acaoSucesso(data); }, //ação de sucesso
            error: function (data) { acaoErro(data); }, //ação de erro
        })
    }

        //define método para consulta
    api.consultar = function (id, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiCliente + "/" + id, //url a ser executada
            method: "GET", //tipo de método a ser executado
            success: function (data) { acaoSucesso(data); }, //ação de sucesso
            error: function (data) { acaoErro(data); }, //ação de erro
        })
    }
    
    //define método para inclusão
    api.incluir = function (dados, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiCliente, //url a ser executada
            method: "POST", //tipo de método a ser executado
            contentType: 'application/json', //define o formato json para envio de dados
            data: JSON.stringify(dados), //converte objeto de dados para json
            success: function (data) { acaoSucesso(data); }, //ação de sucesso
            error: function (data) { acaoErro(data); }, //ação de erro
        })
    }

    //define método para alteração
    api.alterar = function (dados, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiCliente + '/' + dados.id, //url a ser executada
            method: "PUT", //tipo de método a ser executado
            contentType: 'application/json', //define o formato json para envio de dados
            data: JSON.stringify(dados), //converte objeto de dados para json
            success: function (data) { acaoSucesso(data); }, //ação de sucesso
            error: function (data) { acaoErro(data); }, //ação de erro
        })
    }

        //define método para exclusão
    api.excluir = function (id, acaoSucesso, acaoErro) {
        $.ajax({
            url: urlBaseApiCliente + "/" + id, //url a ser executada
            method: "DELETE", //tipo de método a ser executado
            success: function (data) { acaoSucesso(data); }, //ação de sucesso
            error: function (data) { acaoErro(data); }, //ação de erro
        })
    }    

    //retorna o objeto
    return api;
    
}