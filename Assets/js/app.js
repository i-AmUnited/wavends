const images = document.querySelectorAll('#carousel img');
    const indicators = document.querySelectorAll('#carousel-indicators .carousel-indicator');

    let index = 0;

    function showImage() {
      images.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 100}%)`;
        indicators[i].classList.remove('bg-gray-900');
        indicators[i].classList.add('bg-gray-600');
      });
      indicators[index].classList.remove('bg-gray-600');
      indicators[index].classList.add('bg-gray-900');
    }

    function nextSlide() {
      index = (index + 1) % images.length;
      showImage();
    }

    setInterval(nextSlide, 5000);

    showImage(); // Initial display