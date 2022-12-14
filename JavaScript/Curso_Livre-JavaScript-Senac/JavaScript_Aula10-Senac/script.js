var ctx = document.getElementById('myChart').getContext('2d');

        var myChart = new Chart(ctx, {

            type: 'pie', //Tipo do gráfico

            data: {

                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],//Itens do gráfico

                datasets: [{

                    label: '# de Votos', //Título dos itens do gráfico

                    data: [30, 20, 15, 10, 020, 3], //Tamanho dos itens

                    backgroundColor: [ //Cores dos itens

                        'rgba(255, 99, 132, 0.2)',

                        'rgba(54, 162, 235, 0.2)',

                        'rgba(255, 206, 86, 0.2)',

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(153, 102, 255, 0.2)',

                        'rgba(255, 159, 64, 0.2)'

                    ],

                    borderColor: [ //cores de borda dos itens

                        'rgba(255, 99, 132, 1)',

                        'rgba(54, 162, 235, 1)',

                        'rgba(255, 206, 86, 1)',

                        'rgba(75, 192, 192, 1)',

                        'rgba(153, 102, 255, 1)',

                        'rgba(255, 159, 64, 1)'

                    ],

                    borderWidth: 1 //largura da borda

                }]

         },

 });