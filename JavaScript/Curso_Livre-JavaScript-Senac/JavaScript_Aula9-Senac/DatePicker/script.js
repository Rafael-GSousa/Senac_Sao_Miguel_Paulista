//transforma o campo em um datepicker
$("#txtData").datepicker({
  //formato da data
        dateFormat: 'dd/mm/yy',

//dias da semana
        dayNames:
['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],

//letra dos dias
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],

//dias abreviados
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],

//nome dos meses
        monthNames:
['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],

//meses abreviados
        monthNamesShort:
['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],

//texto do próximo
        nextText: 'Próximo',

//texto do anterior
        prevText: 'Anterior',

  });