// Select all thumbnail images
const images = document.querySelectorAll('.thumbnail');

// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const img = document.createElement('img');
lightbox.appendChild(img);

// Style the lightbox initially (hidden)
lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = 0;
lightbox.style.left = 0;
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = 1000;

// When a thumbnail is clicked, show the lightbox with the larger image
images.forEach(image => {
  image.addEventListener('click', () => {
    img.src = image.dataset.large;
    lightbox.style.display = 'flex';
  });
});

// Click anywhere on the lightbox to close it
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
