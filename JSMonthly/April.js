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
                data: [9722.85, 8695.9, 11071,85, 
                       11670.1, 10582.05, 9686.7,
                       7163.55],
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
                data: [584, 525, 674,
                       704, 632, 586, 
                       442],
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
                data: [0, 52.75, 3773.7, 9799.95, 8854.95,
                       4238.6, 4336.4, 5646.05, 8259.1, 7109.95, 
                       6451.7, 4673.55, 3035.45, 3002.45, 2296.35, 64.5
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
                data: [0, 3, 228, 590, 534,
                       262, 262, 341, 499, 431,
                       389, 284, 182, 138, 4
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
            labels: ['Big Meat S', 'Thai Chicken L', 'Four Cheese L', 
                     'Five Cheese L', 'Hawaiian S'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [139, 116, 111, 
                       107, 101
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
            labels: ['Hawaiian', 'Classic Deluxe', 'Barbecue Chicken', 
                     'Thai Chicken', 'California Chicken'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [219, 216, 214, 
                       200, 176
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
            labels: ['Brie Carre', 'Spinach Pesto', 'Chicken Alfredo', 
                     'Mediterranean', 'Green Garden'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [32, 60, 74, 
                       79, 82
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