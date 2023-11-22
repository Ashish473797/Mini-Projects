const inputTask = document.getElementById("task");
const listContainer = document.getElementById("listContainer");

function addTask(){
    let inputVal = inputTask.value;
    inputVal = inputVal.trim();
    if(inputVal !== '')
    {
        let li = document.createElement("li");
        li.innerHTML = inputVal;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    else{
        alert("Please write some To-Do!");
    }
    saveData();
    inputTask.value = "";
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();