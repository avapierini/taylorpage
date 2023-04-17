const galleryItems = document.querySelectorAll('.gallery-item');
let current = 0;

function showNext() {
  galleryItems[current].classList.remove('active');
  current = (current + 1) % gallery
