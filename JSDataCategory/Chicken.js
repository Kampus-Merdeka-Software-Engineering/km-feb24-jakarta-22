//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                     'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'],
            datasets: [{
                label: 'Total Revenue',
                data: [3799.50, 6120, 4679.25, 
                       1224, 6362.25, 6171],
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
                        stepSize: 1000
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
    const labels = ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                    'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'];
    const dataValues = [298, 480, 367, 
                        96, 499, 484];
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels, // The x-axis labels
            datasets: [{
                label: 'Total Order Quantity',
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
            labels: ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                     'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'],
            datasets: [{
                label: 'Total Revenue',
                data: [4623, 8056.75, 8944.50, 
                       11775.25, 15812.00, 16013.00],
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
            labels: ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                     'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'],
            datasets: [{
                label: 'Order Quantity',
                data: [276, 481, 534, 
                       703, 944, 956],
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
            labels: ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                     'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'],
            datasets: [{
                label: 'Total Revenue',
                data: [8279.25, 29257.50, 21082.00, 
                       3901.00, 19235.25, 20584.00],
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
            labels: ['Chicken Pesto', 'Thai Chicken', 'Southwest Chicken', 
                     'Chicken Alfredo', 'California Chicken', 'Barbecue Chicken'],
            datasets: [{
                label: 'Order Quantity',
                data: [399, 1410, 1016, 
                       188, 927, 992],
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