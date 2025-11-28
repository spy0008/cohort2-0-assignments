const para = document.querySelector("p");
const char = "01010101";
const text = para.innerText;

let iteration = 0;

function randomText() {
    const str = text.split('').map((chars, idx) => {
    if(idx < iteration){
        return chars
    }
      return char.split("")[Math.floor(Math.random() * 9)];
    }).join("");

    para.innerText = str

    iteration += 0.2
}

para.addEventListener("mouseenter", function (e) {
  setInterval(randomText, 20);
});
