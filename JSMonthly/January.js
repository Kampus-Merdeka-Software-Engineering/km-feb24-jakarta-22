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
                data: [8220.6, 9368.55, 8786.15, 
                       12079, 12147.4, 11897.55,
                       7222.15],
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
                data: [498, 660, 535,
                       735, 740, 716, 
                       446],
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
                data: [0, 0, 3507.9, 9722.05, 8741.65,
                       6025.35, 4391.55, 5738.7, 7135.95, 7887.55,
                       6453.1, 5004.9, 3308.45, 1723, 31.25
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
                data: [0, 0, 207, 590, 530,
                       370, 271, 357, 432, 474,
                       385, 306, 203, 103, 2
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
            labels: ['Big Meat S', 'Five Cheese L', 'The Thai Chicken Pizza', 
                     'Four Cheese L', 'Barbecue Chicken L'
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
            labels: ['Pepperoni Pizza', 'Barbecue Chicken', 'California Chicken', 
                     'Thai Chicken', 'Sicilian'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [239, 211, 202, 
                       199, 191
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
            labels: ['P, M, and P', 'Brie Carre', 'Calabrese', 
                     'Mediterranean', 'Green Garden'
                    ],
            datasets: [{
                label: 'Sales Quantity',
                data: [0, 35, 67, 
                       68, 75
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