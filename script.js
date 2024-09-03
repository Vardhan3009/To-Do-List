const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
// document.querySelector()

function addTask(){
    // console.log(listContainer)
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let Li=document.createElement("li");
        Li.innerHTML=inputBox.value;
        listContainer.appendChild(Li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        console.log(span.innerHTML , span);
        Li.appendChild(span); 
        console.log(Li.innerHTML , Li , "li");
    } 
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

function clearAllTasks() {
    if(listContainer.innerHTML === ""){
        alert("There is nothing to delete.....!!");
    }
    else{
        if (confirm("Are you sure you want to clear all tasks?")) {
            listContainer.innerHTML = "";
            saveData();
        }
    }
}
showTask();