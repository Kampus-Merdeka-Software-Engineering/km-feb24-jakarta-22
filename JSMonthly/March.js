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
                data: [11496.65, 12524.85, 8655.15, 
                       8949.65, 10506.65, 8887.5,
                       9268.8],
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
                data: [690, 750, 519,
                       541, 644, 540, 
                       574],
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
                data: [0, 50.25, 3174.8, 10231.2, 10119.5,
                       4660.45, 3886.35, 6798.35, 8184, 7233.75,
                       6199.5, 5105.55, 3002.45, 1602,35, 40.75
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
                data: [0, 3, 197, 618, 611,
                       288, 238, 408, 492, 438,
                       377, 306, 178, 101, 3
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
            labels: ['Big Meat S', 'Five Cheese L', 'Four Cheese L', 
                     'Thai Chicken L', 'Spicy Italian L'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [176, 125, 118, 
                       118, 107
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
            labels: ['Barbecue Chicken', 'Hawaiian', 'Thai Chicken', 
                     'Classic Deluxe', 'California Chicken'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [231, 217, 213, 
                       204, 194
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
            labels: ['Brie Carre', 'Calabrese Pizza', 'Spinach Supreme', 
                     'Mediterranean', 'Soppressata'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [45, 65, 71, 
                       78, 78
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