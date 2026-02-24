const inputBoxTitle = document.getElementById("input-box-title");
const app = document.querySelector(".app");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveData() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function render() {
  document.querySelectorAll(".dynamic").forEach(el => el.remove());

  notes.forEach((note, noteIndex) => {
    const h4 = document.createElement("h4");
    h4.textContent = note.title;
    h4.classList.add("dynamic");

    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row", "dynamic");

    const subtaskInput = document.createElement("input");
    subtaskInput.type = "text";
    subtaskInput.placeholder = "Add a subtask(s)";

    const addBtn = document.createElement("button");
    addBtn.classList.add("icon-btn");
    addBtn.textContent = "+";

    const deleteTitleBtn = document.createElement("button");
    deleteTitleBtn.classList.add("icon-btn");
    deleteTitleBtn.textContent = "×";

    const ul = document.createElement("ul");
    ul.classList.add("task-container", "dynamic");

    addBtn.onclick = function () {
      if (subtaskInput.value === "") return;

      note.subtasks.push({
        text: subtaskInput.value,
        completed: false
      });

      subtaskInput.value = "";
      saveData();
      render();
    };

    deleteTitleBtn.onclick = function () {
      notes.splice(noteIndex, 1);
      saveData();
      render();
    };

    taskRow.appendChild(subtaskInput);
    taskRow.appendChild(addBtn);
    taskRow.appendChild(deleteTitleBtn);

    note.subtasks.forEach((sub, subIndex) => {
      const li = document.createElement("li");
      li.classList.add("li-row");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = sub.completed;

      const span = document.createElement("span");
      span.textContent = sub.text;

      if (sub.completed) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
      }

      checkbox.onchange = function () {
        sub.completed = checkbox.checked;
        saveData();
        render();
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("icon-btn");
      deleteBtn.textContent = "×";

      deleteBtn.onclick = function () {
        note.subtasks.splice(subIndex, 1);
        saveData();
        render();
      };

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      ul.appendChild(li);
    });

    app.appendChild(h4);
    app.appendChild(taskRow);
    app.appendChild(ul);
  });
}

function addTitle() {
  if (inputBoxTitle.value.length > 25) {
    alert("Title must be 25 characters or less");
    return;
  }

  if (inputBoxTitle.value === "") {
    alert("You must enter a title to use the notepad.");
    return;
  }

  notes.push({
    title: inputBoxTitle.value,
    subtasks: []
  });

  inputBoxTitle.value = "";
  saveData();
  render();
}

render();
