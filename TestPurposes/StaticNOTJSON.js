//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 
                     'Apr', 'May', 'Jun', 
                     'Jul', 'Aug', 'Sep', 
                     'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [69721.40, 65051.75, 70289.25, 
                       68593, 71294.9, 68158.3,
                       72557.90, 68206.35, 64072.2,
                       63955.7, 70287.5, 64665.2],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        },
                        stepSize: 30000
                    }
                },
                x: {
                    ticks: {
                        autoSkip: false,
                    }
                }
            }
        }
    });
    
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const labels = ['Jan', 'Feb', 'Mar', 
                    'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 
                    'Oct', 'Nov', 'Dec'];
    const dataValues = [4230, 3958, 4258, 
                        4147, 4325, 4105,
                        4392, 4166, 3887,
                        3881, 4263, 3934];
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels, // The x-axis labels
            datasets: [{
                label: 'Monthly Sales Quantity',
                data: dataValues, // The data points for the line chart
                backgroundColor: 'rgba(16, 47, 84, 1)', // The fill color under the line
                borderColor: 'rgba(75, 192, 192, 1)', // The color of the line
                borderWidth: 1 // The width of the line
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx3 = document.getElementById('chart3').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 
                     'Thu', 'Fri', 'Sat', 
                     'Sun'],
            datasets: [{
                label: 'Total Daily Revenue',
                data: [107329.55, 113882.15, 114336.5, 
                       123348.75, 136002, 123002.65,
                       99203.50],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx4 = document.getElementById('chart4').getContext('2d');
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 
                     'Thu', 'Fri', 'Sat', 
                     'Sun'],
            datasets: [{
                label: 'Total Daily Order',
                data: [6482, 6888, 6944,
                       7473, 8240, 7488, 
                       6031],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx5 = document.getElementById('chart5').getContext('2d');
    new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ['09', '10', '11', '12', '13', 
                     '14', '15', '16', '17', '18', 
                     '19', '20', '21', '22', '23'
                    ],
            datasets: [{
                label: 'Total Hourly Revenue',
                data: [83.00, 303.65, 44827.95, 111770.05, 105993.8,
                       59165.45, 52920.4, 69839.7, 86201.5, 89117.1,
                       72592.95, 58143.5, 41993.85, 22729.2, 1121.35
                      ],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx6 = document.getElementById('chart6').getContext('2d');
    new Chart(ctx6, {
        type: 'line',
        data: {
            labels: ['09', '10', '11', '12', '13', 
                     '14', '15', '16', '17', '18', 
                     '19', '20', '21', '22', '23'
                    ],
            datasets: [{
                label: 'Total Hourly Order',
                data: [4, 18, 2725, 6773, 6411,
                       3612, 3214, 4233, 5210, 5412,
                       4405, 3532, 2544, 1385, 68
                      ],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx7 = document.getElementById('chart7').getContext('2d');
    new Chart(ctx7, {
        type: 'bar',
        data: {
            labels: ['Big Meat S', 'Thai Chicken L', 'Five Cheese L', 
                     'Four Cheese L', 'Classic Deluxe M'
                    ],
            datasets: [{
                label: 'Total Order',
                data: [1914, 1410, 1409, 
                       1316, 1181
                      ],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx8 = document.getElementById('chart8').getContext('2d');
    new Chart(ctx8, {
        type: 'bar',
        data: {
            labels: ['Green Garden L', 'Chicken Alfredo S', 'Calabrese S', 
                     'Mexicana Pizza S', 'Chicken Alfredo L'
                    ],
            datasets: [{
                label: 'Total Order',
                data: [95, 96, 99, 
                       162, 188
                      ],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    const ctx9 = document.getElementById('chart9').getContext('2d');
    new Chart(ctx9, {
        type: 'pie',
        data: {
            labels: ['Pizza Size S', 'Pizza Size M', 'Pizza Size L', 'Pizza Size XL'],
            datasets: [{
                label: 'Order Quantity',
                data: [14403, 15635, 18956, 552],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Order By Size'
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#082D2E',
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    const ctx10 = document.getElementById('chart10').getContext('2d');
    new Chart(ctx10, {
        type: 'pie',
        data: {
            labels: ['Classic', 'Supreme', 'Veggie', 'Chicken'],
            datasets: [{
                label: 'Order Quantity',
                data: [14860, 11987, 11649, 11050],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Order By Size'
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#082D2E',
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    const ctx11 = document.getElementById('chart11').getContext('2d');
    new Chart(ctx11, {
        type: 'bar',
        data: {
            labels: ['$20.75','$12.00','$16.00','$16.75','$16.50'
                    ],
            datasets: [{
                label: 'Order Quantity',
                data: [8891, 5744, 4522, 
                       4380, 4111
                      ],
                backgroundColor: 'rgba(16, 47, 84, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });
});