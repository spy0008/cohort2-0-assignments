function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let FullElemsPage = document.querySelectorAll(".fullElem");
  let allElemsBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", function () {
      const id = elem.id;
      FullElemsPage[id].style.display = "block";
    });
  });

  allElemsBackBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = btn.id;
      FullElemsPage[id].style.display = "none";
    });
  });
}

openFeatures();

//todo logic start
let form = document.querySelector(".addTask form");
let inputData = document.querySelector(".addTask form #task-input");
let textareaData = document.querySelector(".addTask form textarea");
let checkbox = document.querySelector(".addTask form #check");

let allCurrentTasks = [];

if (localStorage.getItem("allCurrentTask")) {
  allCurrentTasks = JSON.parse(localStorage.getItem("allCurrentTask"));
} else {
  console.log("task list empty");
}

function renderTask() {
  localStorage.setItem("allCurrentTask", JSON.stringify(allCurrentTasks));
  let allTask = document.querySelector(".allTasks");

  let sum = "";

  allCurrentTasks.forEach(function (elem, idx) {
    sum += `   <div class="task">
                  <h5>${elem.task}<span class=${elem.imp}>imp</span></h5>
                  <button id=${idx}>Mark as Completed</button>
                  </div>`;
  });

  allTask.innerHTML = sum;

  let markedTask = document.querySelectorAll(".task button");

  markedTask.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.id;

      allCurrentTasks.splice(id, 1);

      renderTask();
    });
  });
}

renderTask();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  allCurrentTasks.push({
    task: inputData.value,
    details: textareaData.value,
    imp: checkbox.checked,
  });

  localStorage.setItem("allCurrentTask", JSON.stringify(allCurrentTasks));

  inputData.value = "";
  textareaData.value = "";
  checkbox.checked = false;

  renderTask();
});
//todo logic ends

//daily planner logic

function dailyPlanner() {
  let dailyUi = "";

  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanner")) || {};

  let dayPlanner = document.querySelector(".day-planner");

  let hours = Array.from({ length: 18 }, function (el, idx) {
    return `${6 + idx}:00 - ${7 + idx}:00`;
  });

  hours.forEach(function (elem, idx) {
    let savedData = dayPlanData[idx] || "";
    dailyUi += `  <div class="day-planner-time">
            <p>${elem}</p>
            <input id=${idx} type="text" placeholder="..."  value=${savedData}>
          </div>`;
  });

  dayPlanner.innerHTML = dailyUi;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;
      localStorage.setItem("dayPlanner", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();

//daily planner logic end



//motivation page logic start

function motivation(){
  let content = document.querySelector(".motivation-2 h1");
  let authorName = document.querySelector(".motivation-3 h2");
  
  async function fetchQuotes() {
    try {
      let res = await fetch("https://api.quotable.io/random");
      let result = await res.json();
  
      content.innerHTML = result.content;
      authorName.innerHTML = "- " + result.author;
    } catch (error) {
      console.log("Error in motivation fetch: ", error);
    }
  }
  
  fetchQuotes();

}

motivation()

//motivation logic end