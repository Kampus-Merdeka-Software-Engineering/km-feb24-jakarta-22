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
          sidebarToggle.querySelector('span').innerHTML = '<';
          hoverText.innerHTML = 'Close Sidebar';
          content.style.marginLeft = '270px'; // Increase margin when sidebar is open
          title.style.marginLeft = '270px'; // Increase margin when sidebar is open
      } else {
          sidebarToggle.querySelector('span').innerHTML = '☰';
          hoverText.innerHTML = 'Toggle Sidebar';
          content.style.marginLeft = '50px'; // Shrink margin when sidebar is closed
          title.style.marginLeft = '50px'; // Shrink margin when sidebar is closed
      }
  } else {
      // In responsive mode, maintain the original margin
      content.style.marginLeft = '0';
  }
});

// Add a resize event listener to handle window resize
window.addEventListener('resize', function() {
  var content = document.querySelector('.content');
  if (window.innerWidth <= 768) {
      content.style.marginLeft = '0';
  } else if (document.getElementById('sidebar').classList.contains('open')) {
      content.style.marginLeft = '270px';
  } else {
      content.style.marginLeft = '50px';
  }
});




// Footer Sentences Animations
document.addEventListener('DOMContentLoaded', () => {
  const sentences = [
    "&copy; 2024 Team-22 Revou. All Rights Reserved.",
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


// Navbar Toggle Interactivity
document.getElementById('navbarToggler').addEventListener('click', function () {
    var navbarSupportedContent = document.getElementById('navbarSupportedContent');
    navbarSupportedContent.classList.toggle('open');
});

// Sidebar Category Dropdown Intractivity
document.getElementById('categoryDashboard').addEventListener('click', function () {
    var categoryDashboard = document.getElementById('categoryDashboard');
    categoryDashboard.classList.toggle('active');
});

// Chart Processing
const chartData1 = {
    hourly: [],
    daily: [],
    monthly: []
};

const chartData2 = {
    hourly: [],
    daily: [],
    monthly: []
};

const pieChartData = {
    IncomeCategory: [],
    QuantityCategory: []
};

const sizePieChartData = {
    revenueBySize: [],
    quantitySoldBySize: []
};

const pizzaMetricsData = {
    bestPizzaQuantitySales: [],
    bestPizzaRevenue: []
};

async function loadData() {
    const response1 = await fetch('Revenue.json');
    const data1 = await response1.json();
    
    chartData1.hourly = data1.hourly;
    chartData1.daily = data1.daily;
    chartData1.monthly = data1.monthly;

    const response2 = await fetch('Quantity.json');
    const data2 = await response2.json();
    
    chartData2.hourly = data2.hourly;
    chartData2.daily = data2.daily;
    chartData2.monthly = data2.monthly;

    const response3 = await fetch('TotalOrderQuan.json');
    const data3 = await response3.json();
    
    pieChartData.IncomeCategory = data3.IncomeCategory;
    pieChartData.QuantityCategory = data3.QuantityCategory;

    const response4 = await fetch('TotalOrderSize.json');
    const data4 = await response4.json();
    
    sizePieChartData.revenueBySize = data4.revenueBySize;
    sizePieChartData.quantitySoldBySize = data4.quantitySoldBySize;
}

let myChart1, myChart2, myPieChart, mySizePieChart;

async function initializeCharts() {
    await loadData();
    
    const ctx1 = document.getElementById('chart1').getContext('2d');
    myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
        label: 'Revenue',
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
        label: 'Quantity Sold',
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

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    myPieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Orders',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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

    const sizePieCtx = document.getElementById('sizePieChart').getContext('2d');
    mySizePieChart = new Chart(sizePieCtx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Size Data',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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

    updateChart('chart1', 'monthly', 'data1');
    updateChart('chart2', 'monthly', 'data2');
    updatePieChart('IncomeCategory');
    updateSizePieChart('revenueBySize');
}

function updateChart(chartId, filter, dataKey = 'data1') {
    const chart = chartId === 'chart1' ? myChart1 : myChart2;
    const data = dataKey === 'data1' ? chartData1[filter] : chartData2[filter];

    chart.data.labels = data.map(item => item.label);
    chart.data.datasets[0].data = data.map(item => item.value);

    chart.update();
}

function updatePieChart(filter) {
    const data = pieChartData[filter];
    
    myPieChart.data.labels = data.map(item => item.label);
    myPieChart.data.datasets[0].data = data.map(item => item.value);

    myPieChart.update();
}

function updateSizePieChart(filter) {
    const data = sizePieChartData[filter];
    
    mySizePieChart.data.labels = data.map(item => item.label);
    mySizePieChart.data.datasets[0].data = data.map(item => item.value);

    mySizePieChart.update();
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', initializeCharts);