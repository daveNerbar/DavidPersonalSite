var images = [

    'diavel.jpg',
    'diavel.jpg',
    'ducati.jpg',
    'harley.jpeg',
    'ktm.jpg'
    
  ];
  
  var currentIndex = 1;
  
  function startSlideshow() {
    setInterval(changeBackground, 2000);
  }
  
  function changeBackground() {
    currentIndex++;
    
    if (currentIndex >= images.length) {
      currentIndex = 1;
    }
    
    var imageUrl = images[currentIndex];
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
  }

document.addEventListener('DOMContentLoaded', startSlideshow);