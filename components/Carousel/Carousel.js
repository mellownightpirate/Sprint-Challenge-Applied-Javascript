/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

class Carousel {
  constructor(createCarousel) {
    this.createCarousel = createCarousel;
    this.leftButton = this.createCarousel.querySelector(".left-button");
    this.leftButton.addEventListener("click", () => this.leftShift());
    this.rightButton = this.createCarousel.querySelector(".right-button");
    this.rightButton.addEventListener("click", () => this.rightShift());
    this.images = document.querySelectorAll(".carousel-img");
    this.currentImage = 0;
    this.images[this.currentImage].style.display = "block";

    setInterval(() => this.rightShift(), 5000);
  }

  rightShift() {
    this.images.forEach(image => (image.style.display = "none"));

    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0;
    } else {
      this.currentImage = this.currentImage + 1;
    }
    this.images[this.currentImage].style.display = "block";
  }

  leftShift() {
    this.images.forEach(image => (image.style.display = "none"));

    if (this.currentImage === 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage = this.currentImage - 1;
    }
    this.images[this.currentImage].style.display = "block";
  }
}

const carousels = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));
