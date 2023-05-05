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

  
  
  
  
  
  
  
  
  
  
  
  
