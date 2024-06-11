// Button Direction
document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('.hero button');

    orderButton.addEventListener('click', () => {
        redirectToDashboard();
    });
});

function redirectToDashboard() {
    window.location.href = 'Dashboard/Dashboard.html';
}

// Navbar Toggle Logic
document.getElementById('navbarToggler').addEventListener('click', function () {
    var navbarSupportedContent = document.getElementById('navbarSupportedContent');
    navbarSupportedContent.classList.toggle('open');
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

