function Exibir(){
    var nome = document.getElementById("nome").value;

    var assunto = document.getElementById("assunto").value;
    
    var telefone = document.getElementById("telefone").value;
    
    var email = document.getElementById("email").value;

    alert("Olá " + nome + ", recebemos sua mensagem com assunto " + assunto + ", assim que possível entraremos em contato através do telefone " + telefone + " ou e-mail " + email + ".");
    
    };

var form = document.querySelector("form");
form.addEventListener('submit', Exibir);
