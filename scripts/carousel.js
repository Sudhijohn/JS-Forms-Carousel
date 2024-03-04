export function handleCarousel() {
  const carouselContainer = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");

  function changeCarousel() {
    const length = cards.length;
    let currentIndex = 0;
    let prevIndex;
    setInterval(() => {
      prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
      cards[currentIndex].style.display = "block";
      cards[prevIndex].style.display = "none";
      ++currentIndex;

      if (currentIndex === length) {
        currentIndex = 0;
      }
    }, 5000);
  }

  changeCarousel();
}
