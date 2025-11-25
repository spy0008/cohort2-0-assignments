let dyUi = "";

let users = [
  {
    fullName: "Maya Patel",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    profession: "Web Developer",
    description:
      "Passionate about building responsive websites and improving user experience.",
  },
  {
    fullName: "Arjun Singh",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    profession: "Full-Stack Developer",
    description:
      "Expert in both front-end and back-end technologies with a love for coding challenges.",
  },
  {
    fullName: "Neha Sharma",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    profession: "UI/UX Designer",
    description:
      "Designs sleek interfaces and enhances user interaction for mobile and web apps.",
  },
  {
    fullName: "Rohit Mehta",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
    profession: "Software Engineer",
    description:
      "Specializes in scalable web applications and cloud infrastructure.",
  },
];

users.forEach(function (ui) {
  dyUi =
    dyUi +
    `<div class="main">
        <img src="${ui.img}" alt="">
        <h1>${ui.fullName}</h1>
        <h2>${ui.profession}</h1>
        <p>${ui.description}</p>
    </div>`;
});

let main = document.querySelector("main");

main.innerHTML = dyUi;
