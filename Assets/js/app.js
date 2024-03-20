// Sample data for carousel items
const carouselItems = [
  {
    title: "Image 1",
    caption: "This is the first image",
    imageUrl: "https://via.placeholder.com/600x400?text=Image+1"
  },
  {
    title: "Image 2",
    caption: "This is the second image",
    imageUrl: "https://via.placeholder.com/600x400?text=Image+2"
  },
  {
    title: "Image 3",
    caption: "This is the third image",
    imageUrl: "https://via.placeholder.com/600x400?text=Image+3"
  }
];

// Initialize index to track current carousel item
let currentIndex = 0;

// Function to render carousel items
function renderCarouselItems() {
  const carouselContainer = document.getElementById('carousel');
  carouselContainer.innerHTML = '';

  carouselItems.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === currentIndex) {
      carouselItem.classList.add('active');
    }

    carouselItem.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}">
      <div class="p-4">
        <h2 class="text-xl font-bold">${item.title}</h2>
        <p class="text-gray-600">${item.caption}</p>
      </div>
    `;

    carouselContainer.appendChild(carouselItem);
  });
}

// Function to handle next button click
function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  renderCarouselItems();
}

// Function to handle previous button click
function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  renderCarouselItems();
}

// Render initial carousel items
renderCarouselItems();

// Add event listeners to next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextItem);
document.getElementById('prevBtn').addEventListener('click', prevItem);
