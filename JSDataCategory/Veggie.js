//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Five Cheese', 'Mediterranean', 'Spinach Pesto', 
                     'Green Garden', 'Mexicana', 'Italian Vegetables', 
                     'Spinach and Feta', 'Four Cheese', 'Vegetables + Vegetables'],
            datasets: [{
                label: 'Total Revenue',
                data: [26066.50, 15360.50, 15596, 
                       13955.75, 26780.75, 16019.25,
                       23271.25, 32265.70, 24374.75],
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
                        stepSize: 13000
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
    const labels = ['Five Cheese', 'Mediterranean', 'Spinach Pesto', 
                    'Green Garden', 'Mexicana', 'Italian Vegetables', 
                    'Spinach and Feta', 'Four Cheese', 'Vegetables + Vegetables'];
    const dataValues = [1409, 934, 970, 
                        997, 1484, 981,
                        1446, 1902, 1526];
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
            labels: ['Mediterranean', 'Spinach Pesto', 'Green Garden', 
                     'Mexicana', 'Italian Vegetables', 'Spinach and Feta', 
                     'Four Cheese', 'Vegetables + Vegetables'],
            datasets: [{
                label: 'Total Revenue',
                data: [4400, 4653, 4832, 
                       7280, 8140.50, 8992,
                       8643.50, 10160],
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
            labels: ['Mediterranean', 'Spinach Pesto', 'Green Garden', 
                     'Mexicana', 'Italian Vegetables', 'Spinach and Feta', 
                     'Four Cheese', 'Vegetables + Vegetables'],
            datasets: [{
                label: 'Order Quantity',
                data: [275, 282, 302, 
                       455, 486, 562,
                       586, 635],
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
            labels: ['Five Cheese', 'Mediterranean', 'Spinach Pesto', 
                     'Green Garden', 'Mexicana', 'Italian Vegetables', 
                     'Spinach and Feta', 'Four Cheese', 'Vegetables + Vegetables'],
            datasets: [{
                label: 'Total Revenue',
                data: [26066.50, 7492.50, 5893, 
                       1923.75, 17556.75, 3990,
                       9011.25, 23622.20, 8646.75],
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
            labels: ['Five Cheese', 'Mediterranean', 'Spinach Pesto', 
                     'Green Garden', 'Mexicana', 'Italian Vegetables', 
                     'Spinach and Feta', 'Four Cheese', 'Vegetables + Vegetables'],
            datasets: [{
                label: 'Order Quantity',
                data: [1409, 370, 284, 
                       95, 867, 190,
                       445, 23622.20, 8646.75],
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