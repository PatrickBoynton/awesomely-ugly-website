const button = document.querySelector(".switch");
const img1 = document.querySelector("#clip");
const img2 = document.querySelector("#clip2");


// Not supposed to actually flip the images.
button.addEventListener("click", () => {
  img1.src = img2.src;
});
