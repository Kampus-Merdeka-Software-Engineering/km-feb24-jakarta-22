// Footer Sentences Animations
document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
      "&copy; 2024 Team-22 Revou Jakarta Section. All Rights Reserved.",
      "Those Who Seek, They Shall Receive",
      "A Hero Need Not Speak. When He Is Gone, The World Will Speak For Him - Master Chief",
      "You Can Take My Name, But You Never Have My Heart - Skyfall",
      "We Will Stand Tall And Face It All Together - Skyfall"
  ];
  
    let currentSentenceIndex = 0;
    const footerParagraph = document.querySelector('footer .container p');
  
    function changeSentence() {
        footerParagraph.classList.add('fade-out');
  
        setTimeout(() => {
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            footerParagraph.innerHTML = sentences[currentSentenceIndex];
  
            footerParagraph.classList.remove('fade-out');
            footerParagraph.classList.add('fade-in');
  
            setTimeout(() => {
                footerParagraph.classList.remove('fade-in');
            }, 1000);
        }, 1000); 
    }
  
    setInterval(changeSentence, 5000); 
  });

// Sidebar Toggle Interactivity
document.getElementById('sidebarToggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var hoverText = sidebarToggle.querySelector('.hover-text');
    var content = document.querySelector('.content');
    var title = document.querySelector('.title-container');
  
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('open');
  
    // Check if the screen width is greater than 768px (desktop mode)
    if (window.innerWidth > 768) {
        if (sidebar.classList.contains('open')) {
            sidebarToggle.querySelector('span').innerHTML = '☰';
            hoverText.innerHTML = 'Close Menu';
            content.style.marginLeft = '270px'; // Increase margin when sidebar is open
            title.style.marginLeft = '270px'; // Increase margin when sidebar is open
        } else {
            sidebarToggle.querySelector('span').innerHTML = '☰';
            hoverText.innerHTML = 'Toggle Menu';
            content.style.marginLeft = '50px'; // Shrink margin when sidebar is closed
            title.style.marginLeft = '50px'; // Shrink margin when sidebar is closed
        }
    } else {
        // In responsive mode, maintain the original margin
        content.style.marginLeft = '0';
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
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Total Revenue',
                data: [],
                backgroundColor: 'rgba(16, 47, 84, 1)',
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
                backgroundColor: 'rgba(16, 47, 84, 1)',
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

document.addEventListener('DOMContentLoaded', initializeCharts);