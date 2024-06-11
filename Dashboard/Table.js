// Fetch data from the local JSON file
fetch('../Dashboard/TableData.json')
.then(response => response.json())
.then(data => {
    $('#pizzaTable').DataTable({
        data: data,
        columns: [
            { data: 'PizzaName' },
            { data: 'TotalRevenue' },
            { data: 'TotalQuantity' },
            { data: 'Category' }
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

// Sidebar Toggle Interactivity
document.getElementById('sidebarToggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var hoverText = sidebarToggle.querySelector('.hover-text');
  
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('open');
  
    if (sidebar.classList.contains('open')) {
        sidebarToggle.querySelector('span').innerHTML = '☰';
        hoverText.innerHTML = 'Close Menu';
    } else {
        sidebarToggle.querySelector('span').innerHTML = '☰';
        hoverText.innerHTML = 'Toggle Menu';
    }
});

// Handle category dropdown
document.getElementById('categoryDashboard').addEventListener('click', function () {
var categoryDashboard = document.getElementById('categoryDashboard');
categoryDashboard.classList.toggle('active');
});

// Footer Sentences Animations
document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
      "2024 Team-22 Revou Jakarta Section. All Rights Reserved.",
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