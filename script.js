document
  .getElementById("breadmovie")
  .addEventListener("mouseenter", function () {
    this.play();
  });

document
  .getElementById("breadmovie")
  .addEventListener("mouseleave", function () {
    this.pause();
    this.currentTime = 0;
  });

document.getElementById("carmovie").addEventListener("mouseenter", function () {
  this.play();
});

document.getElementById("carmovie").addEventListener("mouseleave", function () {
  this.pause();
  this.currentTime = 0;
});
