//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Big Meat', 'Greek', 'Pepperoni, Mushroom, and Peppers', 
                     'Italian Capocollo', 'Napolitana', 'Hawaiian',
                     'Pepperoni', 'Classic Deluxe'],
            datasets: [{
                label: 'Total Revenue',
                data: [22968, 3648, 6358, 
                       3624, 5652, 10170,
                       7322.25, 9588],
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
                        stepSize: 3000
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
    const labels = ['Big Meat', 'Greek', 'Pepperoni, Mushroom, and Peppers', 
                    'Italian Capocollo', 'Napolitana', 'Hawaiian',
                    'Pepperoni', 'Classic Deluxe'];
    const dataValues = [1914, 304, 578, 
                        302, 471, 1020,
                        751, 799];
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
            labels: ['Greek', 'Pepperoni, Mushroom, and Peppers', 'Italian Capocollo', 
                     'Napolitana', 'Hawaiian','Pepperoni', 
                     'Classic Deluxe'],
            datasets: [{
                label: 'Total Revenue',
                data: [4496.00, 5756.50, 6464.00, 
                       6832.00, 6399.75, 11737.50,
                       18896.00],
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
            labels: ['Greek', 'Pepperoni, Mushroom, and Peppers', 'Italian Capocollo', 
                     'Napolitana', 'Hawaiian','Pepperoni', 
                     'Classic Deluxe'],
            datasets: [{
                label: 'Order Quantity',
                data: [281, 397, 404, 
                       427, 483, 939,
                       1181],
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
            labels: ['Greek', 'Pepperoni, Mushroom, and Peppers', 'Italian Capocollo', 
                     'Napolitana', 'Hawaiian','Pepperoni', 
                     'Classic Deluxe'],
            datasets: [{
                label: 'Total Revenue',
                data: [5227.50, 6720, 15006.00, 
                       11603.00, 15163.50, 11102.00,
                       9696.50],
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
            labels: ['Greek', 'Pepperoni, Mushroom, and Peppers', 'Italian Capocollo', 
                     'Napolitana', 'Hawaiian','Pepperoni', 
                     'Classic Deluxe'],
            datasets: [{
                label: 'Order Quantity',
                data: [255, 384, 732, 
                       566, 919, 728,
                       473],
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
            labels: ['Greek'],
            datasets: [{
                label: 'Total Revenue',
                data: [14076],
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
            labels: ['Greek'],
            datasets: [{
                label: 'Order Quantity',
                data: [552],
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