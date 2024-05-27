//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Brie Carre', 'Spinach Supreme', 'Soppressata', 
                     'Spicy Italian', 'Pepper Salami', 'Calabrese',
                     'Sicilian', 'Prosciutto and Arugula', 'Italian Supreme'],
            datasets: [{
                label: 'Total Revenue',
                data: [11588.50, 5000, 3600, 
                       5087.50, 4025, 1212.75,
                       9199.75, 5300, 2450],
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
                        stepSize: 2000
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
    const labels = ['Brie Carre', 'Spinach Supreme', 'Soppressata', 
                    'Spicy Italian', 'Pepper Salami', 'Calabrese',
                    'Sicilian', 'Prosciutto and Arugula', 'Italian Supreme'];
    const dataValues = [490, 400, 288, 
                        407, 322, 99,
                        751, 424, 196];
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels, // The x-axis labels
            datasets: [{
                label: 'Order Quantity',
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
            labels: ['Spinach Supreme', 'Soppressata', 'Spicy Italian', 
                     'Pepper Salami', 'Calabrese', 'Sicilian', 
                     'Prosciutto and Arugula', 'Italian Supreme'],
            datasets: [{
                label: 'Total Revenue',
                data: [4405.50, 4422, 6732, 
                       7062, 9132.50, 9327.50,
                       9867, 15526.50],
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
            labels: ['Spinach Supreme', 'Soppressata', 'Spicy Italian', 
                     'Pepper Salami', 'Calabrese', 'Sicilian', 
                     'Prosciutto and Arugula', 'Italian Supreme'],
            datasets: [{
                label: 'Order Quantity',
                data: [267, 268, 408, 
                       428, 562, 574,
                       598, 941],
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
        type: 'bar',
        data: {
            labels: ['Spinach Supreme', 'Soppressata', 'Spicy Italian', 
                     'Pepper Salami', 'Calabrese', 'Sicilian', 
                     'Prosciutto and Arugula', 'Italian Supreme'],
            datasets: [{
                label: 'Total Revenue',
                data: [5872.25, 8403.75, 23011.75, 
                       14442, 5589, 12413.25,
                       9026.25, 15500.25],
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
            labels: ['Spinach Supreme', 'Soppressata', 'Spicy Italian', 
                     'Pepper Salami', 'Calabrese', 'Sicilian', 
                     'Prosciutto and Arugula', 'Italian Supreme'],
            datasets: [{
                label: 'Order Quantity',
                data: [283, 405, 1109, 
                       696, 276, 613,
                       435, 747],
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