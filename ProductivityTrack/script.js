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

function motivation() {
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

motivation();

//motivation logic end

//pomodoro logic start

function pomodoroTimer() {
  let timer = document.querySelector(".pomo-timer h1");
  var startBtn = document.querySelector(".pomo-timer .start-timer");
  var pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  var resetBtn = document.querySelector(".pomo-timer .reset-timer");
  var session = document.querySelector(".pomodoro-fullpage .session");
  var isWorkSession = true;

  let totalSeconds = 25 * 60;
  let timerInterval = null;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(
      seconds
    ).padStart("2", "0")}`;
  }

  function startTimer() {
    clearInterval(timerInterval);

    if (isWorkSession) {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          timer.innerHTML = "05:00";
          session.innerHTML = "Take a Break";
          session.style.backgroundColor = "var(--blue)";
          totalSeconds = 5 * 60;
        }
      }, 10);
    } else {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
          session.style.backgroundColor = "var(--green)";
          totalSeconds = 25 * 60;
        }
      }, 10);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }
  function resetTimer() {
    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    updateTimer();
  }
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();

//daily goals logic start

const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const text = goalInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "goal-item";
  li.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span class="goal-text">${text}</span>
        <button class="delete-btn" onclick="deleteGoal(this)">Delete</button>
    `;
  goalList.appendChild(li);
  goalInput.value = "";
});

function toggleComplete(checkbox) {
  const li = checkbox.parentElement;
  li.classList.toggle("completed");
}

function deleteGoal(button) {
  const li = button.parentElement;
  li.remove();
}

goalInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addGoal();
  }
});

//daily-planner logic end

// othar logics

function weatherFunctionality() {
  // I have removed API key for security purpose
  var apiKey = "075e69b83714499aa0295513252112";
  var city = "Sagwara";

  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  var precipitation = document.querySelector(".header2 .precipitation");
  var humidity = document.querySelector(".header2 .humidity");
  var wind = document.querySelector(".header2 .wind");

  var data = null;

  async function weatherAPICall() {
    var response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    data = await response.json();

    header2Temp.innerHTML = `${data.current.temp_c}°C`;
    header2Condition.innerHTML = `${data.current.condition.text}`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
    precipitation.innerHTML = `Heat Index : ${data.current.heatindex_c}%`;
  }

  weatherAPICall();

  function timeDate() {
    const totalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var dayOfWeek = totalDaysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var tarik = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    header1Date.innerHTML = `${tarik} ${month}, ${year}`;

    if (hours > 12) {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart(
        "2",
        "0"
      )} PM`;
    } else {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart(
        "2",
        "0"
      )} AM`;
    }
  }

  setInterval(() => {
    timeDate();
  }, 1000);
}

weatherFunctionality();

function changeTheme() {
  var theme = document.querySelector(".theme");
  var rootElement = document.documentElement;

  var flag = 0;
  theme.addEventListener("click", function () {
    if (flag == 0) {
      rootElement.style.setProperty("--pri", "#F8F4E1");
      rootElement.style.setProperty("--sec", "#222831");
      rootElement.style.setProperty("--tri1", "#948979");
      rootElement.style.setProperty("--tri2", "#393E46");
      flag = 1;
    } else if (flag == 1) {
      rootElement.style.setProperty("--pri", "#F1EFEC");
      rootElement.style.setProperty("--sec", "#030303");
      rootElement.style.setProperty("--tri1", "#D4C9BE");
      rootElement.style.setProperty("--tri2", "#123458");
      flag = 2;
    } else if (flag == 2) {
      rootElement.style.setProperty("--pri", "#F8F4E1");
      rootElement.style.setProperty("--sec", "#381c0a");
      rootElement.style.setProperty("--tri1", "#FEBA17");
      rootElement.style.setProperty("--tri2", "#74512D");
      flag = 0;
    }
  });
}

changeTheme();
