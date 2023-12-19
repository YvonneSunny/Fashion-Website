
const images = [
  "Img/Fashion1.jpg.jpg",
  "Img/Fashion2.jpg.jpg",
  "Img/Fashion3.jpg.jpg"
];
let currentIndex = 0;

function changeImage() {
  const displayedImage = document.getElementById("displayedImage");

  currentIndex = (currentIndex + 1) % images.length;
  displayedImage.src = images[currentIndex];
}