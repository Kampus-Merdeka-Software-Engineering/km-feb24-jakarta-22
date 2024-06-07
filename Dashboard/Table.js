// Fetch data from the local JSON file
fetch('../Dashboard/TableData.json')
.then(response => response.json())
.then(data => {
    $('#pizzaTable').DataTable({
        data: data,
        columns: [
            { data: 'PizzaName' },
            { data: 'TotalRevenue' },
            { data: 'TotalQuantity' }
        ],
        pageLength: 10,
        responsive: true
    });
})
.catch(error => console.error('Error fetching data:', error));

// Handle navbar toggle
document.getElementById('navbarToggler').addEventListener('click', function () {
var navbarSupportedContent = document.getElementById('navbarSupportedContent');
navbarSupportedContent.classList.toggle('open');
});

// Handle sidebar toggle
document.getElementById('sidebarToggle').addEventListener('click', function () {
var sidebar = document.getElementById('sidebar');
var sidebarToggle = document.getElementById('sidebarToggle');
sidebar.classList.toggle('open');
sidebarToggle.classList.toggle('open');
document.getElementById('tableContainer').classList.toggle('table-move');
if (sidebar.classList.contains('open')) {
    sidebarToggle.innerHTML = '←';
} else {
    sidebarToggle.innerHTML = '→';
}
});

// Handle category dropdown
document.getElementById('categoryDashboard').addEventListener('click', function () {
var categoryDashboard = document.getElementById('categoryDashboard');
categoryDashboard.classList.toggle('active');
});