let h1 = document.querySelector("h1");
let main = document.querySelector("main")
let btn = document.querySelector("button")
let body = document.querySelector("body")
let captain = document.querySelector(".captain")
let main_heading = document.querySelector(".main-heading")
let trophies = document.querySelector(".trophies")

let iplTeams = [
  {
    name: "CSK",
    fullname: "Chennai Super Kings",
    primaryColor: "#F9CD05",      
    secondaryColor: "#1B4D9B",     
    trophies: 5,                   
    captain: "Ruturaj Gaikwad"
  },
  {
    name: "MI",
    fullname: "Mumbai Indians",
    primaryColor: "#004BA0",       
    secondaryColor: "#D1AB3E",     
    trophies: 5,                   
    captain: "Hardik Pandya"
  },
  {
    name: "KKR",
    fullname: "Kolkata Knight Riders",
    primaryColor: "#3A225D",       
    secondaryColor: "#D4AF37",   
    trophies: 3,                  
    captain: "Ajinkya Rahane"
  },
  {
    name: "RCB",
    fullname: "Royal Challengers Bengaluru",
    primaryColor: "#D71920",    
    secondaryColor: "#000000",    
    trophies: 1,                 
    captain: "Virat Kohli"
  },
  {
    name: "RR",
    fullname: "Rajasthan Royals",
    primaryColor: "#254AA5",     
    secondaryColor: "#EA1A8E",   
    trophies: 1,                 
    captain: "Sanju Samson"
  },
  {
    name: "SRH",
    fullname: "Sunrisers Hyderabad",
    primaryColor: "#F26522",       
    secondaryColor: "#000000",    
    trophies: 1,                 
    captain: "Pat Cummins"
  },
  {
    name: "DC",
    fullname: "Delhi Capitals",
    primaryColor: "#17479E",     
    secondaryColor: "#DA291C",  
    trophies: 0,
    captain: "Axar Patel"
  },
  {
    name: "PBKS",
    fullname: "Punjab Kings",
    primaryColor: "#ED1B24",    
    secondaryColor: "#C0C0C0",     
    trophies: 0,
    captain: "Shreyas Iyer"
  },
  {
    name: "GT",
    fullname: "Gujarat Titans",
    primaryColor: "#1B2133",       
    secondaryColor: "#D4AF37",     
    trophies: 1,                   
    captain: "Shubman Gill"
  },
  {
    name: "LSG",
    fullname: "Lucknow Super Giants",
    primaryColor: "#00A6A6",       
    secondaryColor: "#F58220",     
    trophies: 0,
    captain: "Rishabh Pant"
  }
];

let team = Math.floor(Math.random()*iplTeams.length);

btn.addEventListener("click", function(){
    let team = Math.floor(Math.random()*iplTeams.length);
    h1.innerHTML = iplTeams[team].name
    main.style.backgroundColor = iplTeams[team].primaryColor
    body.style.backgroundColor = iplTeams[team].secondaryColor   
    captain.innerHTML = iplTeams[team].captain 
    main_heading.innerHTML = `IPL - 2026 winner - ${iplTeams[team].fullname}` 
    trophies.innerHTML = `trophies: ${iplTeams[team].trophies}`
})
