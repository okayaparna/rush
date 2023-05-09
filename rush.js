window.addEventListener('scroll', function() {
    var popUpText = document.querySelector('.pop-up-text');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      popUpText.style.display = 'block';
    } else {
      popUpText.style.display = 'none';
    }
  });
  