const dragBar = document.querySelector('.drag-bar');

dragBar.addEventListener('mousedown', function(event) {
  const initialX = dragBar.getBoundingClientRect().left;
  const mouseX = event.clientX;

  const initialWidth = dragBar.getBoundingClientRect().width;

  const minWidth = 50;
  const maxWidth = window.innerWidth - initialX;

  const initialOffset = mouseX - initialX;

  function updateWidth(event) {
    const newWidth = initialWidth + (event.clientX - mouseX);
    dragBar.style.width = `${Math.max(minWidth, Math.min(maxWidth, newWidth))}px`;
  }

  document.addEventListener('mousemove', updateWidth);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', updateWidth);
  });
});

// percentage change

const chargeText = document.querySelector('.charge-text');

let isDragging = false;

dragBar.addEventListener('mousedown', function() {
  isDragging = true;
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

dragBar.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const percentage = Math.round((event.clientX - this.getBoundingClientRect().left) / this.offsetWidth * 100);
    chargeText.textContent = percentage + '%';
  }
});


// pop-up

const popUpText = document.querySelector('.pop-up-text');

dragBar.addEventListener('mousedown', function() {
  document.addEventListener('mouseup', mouseUpHandler);
});

function mouseUpHandler() {
  popUpText.style.display = 'block';
  document.removeEventListener('mouseup', mouseUpHandler);
}

// splash-screen

window.addEventListener('load', function() {
  const splashScreen = document.querySelector('.splash-screen');
  splashScreen.style.opacity = 0;
  let opacity = 0;
  const fadeInTimerId = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(fadeInTimerId);
      setTimeout(function() {
        const fadeOutTimerId = setInterval(function() {
          if (opacity <= 0) {
            clearInterval(fadeOutTimerId);
            splashScreen.style.display = 'none';
            // Unhide the rest of the content
            const content = document.querySelector('.content');
            content.style.display = 'block';
          }
          splashScreen.style.opacity = opacity;
          opacity -= 0.01;
        }, 20); // Update the opacity every 20 milliseconds (for a smoother animation)
      }, 3000); // Wait for 2 seconds before fading out
      return;
    }
    splashScreen.style.opacity = opacity;
    opacity += 0.01;
  }, 10); // Update the opacity every 10 milliseconds (for a smoother animation)
});

// fade in and out and body appears
const splashScreen = document.querySelector('.splash-screen');
const content = document.querySelector('.content');

// Fade in splash screen
splashScreen.style.opacity = 0;
splashScreen.style.transition = 'opacity 1s';
setTimeout(() => {
  splashScreen.style.opacity = 1;
}, 0);

// Fade out splash screen and remove from DOM
setTimeout(() => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {
    splashScreen.parentNode.removeChild(splashScreen);
  }, 500); // wait for 0.5 seconds for fade out animation to finish
  content.classList.remove('hidden');
}, 2000);

  
  
  
  
  
  
  
