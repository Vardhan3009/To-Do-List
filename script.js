const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create a container for the buttons
        let buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Create edit button
        let editButton = document.createElement("span");
        editButton.innerHTML = "✎"; // Unicode character for a pencil icon
        editButton.className = "edit-btn";
        buttonContainer.appendChild(editButton);

        // Create delete button
        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7"; // Unicode character for "X"
        deleteButton.className = "delete-btn";
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI" && !e.target.classList.contains("button-container")) {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.className === "delete-btn") {
        e.target.parentElement.parentElement.remove();
        saveData();
    } else if (e.target.className === "edit-btn") {
        let taskText = e.target.parentElement.parentElement.firstChild.textContent;
        let newTask = prompt("Edit your task:", taskText);
        if (newTask !== null && newTask !== '') {
            e.target.parentElement.parentElement.firstChild.textContent = newTask;
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function clearAllTasks() {
    if (listContainer.innerHTML === "") {
        alert("There is nothing to delete.....!!");
    } else {
        if (confirm("Are you sure you want to clear all tasks?")) {
            listContainer.innerHTML = "";
            saveData();
        }
    }
}

showTask();
