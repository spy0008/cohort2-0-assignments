let div = document.querySelector("div")
let btn =  document.querySelector("button")

const famousQuotes = [
  "I'm the king of the world! - Titanic",
  "May the Force be with you. - Star Wars",
  "I'll be back. - The Terminator",
  "To infinity... and beyond! - Toy Story",
  "Just keep swimming. - Finding Nemo",
  "With great power comes great responsibility. - Spider-Man",
  "You can't handle the truth! - A Few Good Men",
  "Life finds a way. - Jurassic Park",
  "I am gonna make him an offer he can’t refuse. - The Godfather",
  "The world is yours. - Scarface",
  "You have to be a little crazy to do great things. - One Piece (anime)",
  "Fear is the mind-killer. - Dune",
  "Whatever you lose, you'll find it again. But what you throw away you'll never get back. - Kenshin Himura, Rurouni Kenshin (anime)",
  "Power comes in response to a need, not a desire. - Avatar: The Last Airbender (anime)",
  "I’ll take a potato chip... and eat it! - Death Note (anime)"
];


btn.addEventListener("click", function(){
    let num = Math.floor(Math.random()*famousQuotes.length)
    let x = Math.random()*90
    let y = Math.random()*90
    let text = famousQuotes[num]
    let h1 = document.createElement("h1")
    h1.style.position = 'absolute'
    h1.style.top = x +'%'
    h1.style.left = y +'%'
    h1.innerHTML = text
    h1.style.color = 'white'
    div.appendChild(h1)
})