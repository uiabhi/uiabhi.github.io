var ctx = document.getElementById('WeeklymyChart2');ctx.style.backgroundColor = 'rgba( 255,255,255,255)';
                var myChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                    datasets: [{
                      label: 'Total Media',
                      data: [12, 18, 19, 26, 22, 23],
                      backgroundColor: [
                        'rgba(0, 149, 0, 0)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 2
                    }]
                  },
                  options: {
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: false
                        }
                      }]
                    }
                  }
                });
              