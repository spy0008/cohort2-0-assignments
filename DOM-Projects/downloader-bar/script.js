let btn = document.querySelector("button");
let dStatus = document.querySelector(".inner");
let progressNum = document.querySelector("h2");
let main = document.querySelector("h1");

let progress = 0;

btn.addEventListener("click", function () {
  let speed = 50 + Math.floor(Math.random() * 50);
  btn.style.opacity = 0.5;
  btn.style.pointerEvents = "none";
  let done = setInterval(function () {
    progress++;
    progressNum.innerHTML = progress + "%";
    dStatus.style.width = progress + "%";
  }, speed);

  setTimeout(function () {
    clearInterval(done);
    btn.innerHTML = "Downloaded";
    let h4 = document.createElement("h4");
    h4.innerHTML = `Your file downloaded in, ${speed / 10} seconds`;
    h4.style.marginTop = "5px";
    h4.style.fontSize = "18px"
    h4.style.textAlign = "center";

    main.appendChild(h4);
  }, speed * 100);
});
