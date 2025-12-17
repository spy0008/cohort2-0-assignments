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

  location.reload();
});

let markedTask = document.querySelectorAll(".task button");

markedTask.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.id;

    allCurrentTasks.splice(id, 1);

    renderTask();

    location.reload();
  });
});
