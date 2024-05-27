//This javascript code uses json datasets that has been stored locally in this web folder.

document.addEventListener("DOMContentLoaded", function() {
    fetch('salesmonth.json')
    .then(response => response.json())
    .then(data => {
        const months = data.map(entry => entry.Month);
        const incomes = data.map(entry => parseFloat(entry.Income.replace(/[$,]/g, '')));

        const ctx1 = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Income',
                    data: incomes,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
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
                            stepSize: 20000
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
    })
    .catch(error => console.error('Error fetching data:', error));
});
