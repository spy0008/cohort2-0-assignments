let imgClick = document.querySelector("img");
let likeImg = document.querySelector("i");

imgClick.addEventListener("dblclick", function () {
  likeImg.style.opacity = 1;
  likeImg.style.transform = "translate(-50%,-50%) scale(1.5) rotate(0deg)";

  setTimeout(function () {
    likeImg.style.transform =
      "translate(-50%,-240%) scale(1.2) rotate(-360deg)";
  }, 500);

  setTimeout(function () {
    likeImg.style.opacity = 0;
  }, 600);

  setTimeout(function () {
    likeImg.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
  }, 1000);
});
