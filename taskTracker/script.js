let taskData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const complete = document.querySelector("#complete");
let dragEle = null;

const tasks = document.querySelectorAll(".task-card");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    dragEle = task;
  });
});

function addTask(title, desc, colume) {
  const div = document.createElement("div");

  div.classList.add("task-card");
  div.setAttribute("draggable", "true");

  div.innerHTML = ` <div class="tag"><h2>${title}</h2>
  <button>Delete</button></div>  
                            <p>${desc}</p>
                            `;

  colume.appendChild(div);
  div.addEventListener("drag", (e) => {
    dragEle = div;
  });

  const deleteBtn = div.querySelector("button");

  deleteBtn.addEventListener("click", () => {
    div.remove();
    UpdateTaskUI();
  });

  return div;
}

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const colume = document.querySelector(`#${col}`);
    data[col].forEach((task) => {
      addTask(task.title, task.desc, colume);
    });
  }
}

function UpdateTaskUI() {
  [todo, progress, complete].forEach((col) => {
    const tasks = col.querySelectorAll(".task-card");
    const count = col.querySelector(".right");

    taskData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerText,
        desc: t.querySelector("p").innerText,
      };
    });

    localStorage.setItem("tasks", JSON.stringify(taskData));

    count.innerText = tasks.length;
  });
}

UpdateTaskUI();

function addColumeHover(colume) {
  colume.addEventListener("dragenter", (e) => {
    e.preventDefault();
    colume.classList.add("hover-over");
  });

  colume.addEventListener("dragleave", (e) => {
    e.preventDefault();
    colume.classList.remove("hover-over");
  });

  colume.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  colume.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop", dragEle, colume);
    colume.appendChild(dragEle);
    colume.classList.remove("hover-over");

    UpdateTaskUI();
  });
}

addColumeHover(todo);
addColumeHover(progress);
addColumeHover(complete);

// modal logic

const toggleTask = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".bg");
const addTaskBtn = document.querySelector("#add-new-task");

toggleTask.addEventListener("click", (e) => {
  modal.classList.add("active");
});

modalBg.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", (e) => {
  let taskTitle = document.querySelector("#task-title").value;
  let taskDesc = document.querySelector("#task-desc").value;

  if (taskTitle.trim() && taskDesc.trim()) {
    addTask(taskTitle, taskDesc, todo);
    modal.classList.remove("active");

    UpdateTaskUI();
  }

  document.querySelector("#task-title").value = "";
   document.querySelector("#task-desc").value = "";
});
