document.addEventListener('DOMContentLoaded', initializeCharts);

// Sidebar Toggle Interactivity
document.getElementById('sidebarToggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        sidebarToggle.innerHTML = '←';
    } else {
        sidebarToggle.innerHTML = '→';
    }
});

// Navbar Toggle Interactivity
document.getElementById('navbarToggler').addEventListener('click', function () {
    var navbarSupportedContent = document.getElementById('navbarSupportedContent');
    navbarSupportedContent.classList.toggle('open');
});

// Sidebar Category Dropdown Interactivity
document.getElementById('categoryDashboard').addEventListener('click', function () {
    var categoryDashboard = document.getElementById('categoryDashboard');
    categoryDashboard.classList.toggle('active');
});

// Chart Processing
const chartData1 = {
    Small: [],
    Medium: [],
    Large: []
};

const chartData2 = {
    Small: [],
    Medium: [],
    Large: []
};

async function loadData() {
    try {
        const response1 = await fetch('../JSDataCategory/RevenueClassic.json');
        if (!response1.ok) throw new Error('Failed to load RevenueClassic.json');
        const data1 = await response1.json();
        
        chartData1.Small = data1.Small;
        chartData1.Medium = data1.Medium;
        chartData1.Large = data1.Large;

        const response2 = await fetch('../JSDataCategory/QuantityClassic.json');
        if (!response2.ok) throw new Error('Failed to load QuantityClassic.json');
        const data2 = await response2.json();
        
        chartData2.Small = data2.Small;
        chartData2.Medium = data2.Medium;
        chartData2.Large = data2.Large;
    } catch (error) {
        console.error(error);
    }
}

let myChart1, myChart2;

async function initializeCharts() {
    await loadData();
    
    const ctx1 = document.getElementById('chart1').getContext('2d');
    myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Total Revenue',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Total Quantity Sold',
                data: [],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });

    updateChart('chart1', 'Small', 'data1');
    updateChart('chart2', 'Small', 'data2');
}

function updateChart(chartId, filter, dataKey = 'data1') {
    const chart = chartId === 'chart1' ? myChart1 : myChart2;
    const data = dataKey === 'data1' ? chartData1[filter] : chartData2[filter];

    if (data) {
        chart.data.labels = data.map(item => item.label);
        chart.data.datasets[0].data = data.map(item => item.value);
        chart.update();
    }
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
