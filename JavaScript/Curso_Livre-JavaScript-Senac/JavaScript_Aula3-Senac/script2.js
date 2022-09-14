function PintarVermelho()
{
    this.style.color = 'red';
}

function PintarVerde()
{
    this.style.color = 'green';
}

//buscando elemento
var titulo = document.querySelector('h1');
//adicionando eventos
titulo.addEventListener('mouseover', PintarVermelho);
titulo.addEventListener('mouseout', PintarVerde);

var paragrafo = document.querySelector('p');
paragrafo.addEventListener('click', function AlterarTamanho(){
    this.style.color = 'blue';
    this.style.fontFamily = 'Segoe UI';
});