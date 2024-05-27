//This Javascript code is for Static Usage which every data in it has to be written directly from this code

document.addEventListener("DOMContentLoaded", function() {

    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 
                     'Thu', 'Fri', 'Sat', 
                     'Sun'],
            datasets: [{
                label: 'Total Revenue',
                data: [8625.35, 8987.75, 9642.1, 
                       8666.15, 10977.6, 9207.4,
                       8945.4],
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

    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 
                     'Thu', 'Fri', 'Sat', 
                     'Sun'],
            datasets: [{
                label: 'Total Daily Order',
                data: [527, 546, 599,
                       526, 663, 557, 
                       540],
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

    const ctx3 = document.getElementById('chart3').getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['09', '10', '11', '12', '13', 
                     '14', '15', '16', '17', '18', 
                     '19', '20', '21', '22', '23'
                    ],
            datasets: [{
                label: 'Total Hourly Revenue',
                data: [0, 47.9, 3814.4, 8591.6, 8157.45,
                       5456.55, 4073.1, 4828.3, 7502.55, 6697.25,
                       5468.5, 4787.25, 3754.2, 1771.2, 101.5
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

    const ctx4 = document.getElementById('chart4').getContext('2d');
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['09', '10', '11', '12', '13', 
                     '14', '15', '16', '17', '18', 
                     '19', '20', '21', '22', '23'
                    ],
            datasets: [{
                label: 'Total Hourly Order',
                data: [0, 3, 237, 518, 484,
                       332, 251, 297, 466, 406,
                       331, 290, 107, 103, 6
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

    const ctx5 = document.getElementById('chart5').getContext('2d');
    new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['Big Meat S', 'Four Cheese L', 'Five Cheese L', 
                     'Thai Chicken L', 'Spicy Italian L'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [150, 138, 119, 
                       102, 96
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
        type: 'bar',
        data: {
            labels: ['Pepperoni Pizza', 'California Chicken', 'Hawaiian', 
                     'Barbecue Chicken', 'Classic Deluxe'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [205, 204, 198, 
                       193, 173
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
            labels: ['Brie Carre', 'Mediterranean', 'Chicken Alfredo', 
                     'Spinach Pesto', 'Soppressata'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [45, 65, 74, 
                       75, 76
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