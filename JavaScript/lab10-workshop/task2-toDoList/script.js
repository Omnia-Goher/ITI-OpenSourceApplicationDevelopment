var task_input = document.getElementById("task-input")
var add_btn = document.getElementById("add-btn")
var task_container = document.getElementById("task-container")
var TaskArray = []

if (localStorage.getItem("tasks")) {
    TaskArray = JSON.parse(localStorage.getItem("tasks"));
}
loadTasksFromLocalStorage()

task_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        add_btn.click()
    }
})

add_btn.addEventListener('click', () => {
    if (task_input.value != "") {
        var task = {
            id: Date.now(),
            content: task_input.value,
            complete: false
        }
        addTask(task)
        TaskArray.push(task)
        addTaskToLocalStorage(TaskArray)
    }
})

function addTask(task) {
    task_container.querySelector("h4").classList.remove("d-block")
    task_container.querySelector("h4").classList.add("d-none")
    var div = document.createElement('div');
    div.className = 'row bg-light py-1 rounded-5 mt-3 mb-3 text-start ps-4';
    div.innerHTML = `
                <p id="task-text" class="col-md-10 card-text fs-5 pe-4 pt-1">${task.content}</p>
                <div id=${task.id} class="col-md-2 pt-1 text-center">
                    <button id="delete-btn" class="btn btn-danger rounded-5"><i class="fa fa-close"></i></button>
                </div>
        `
    div.addEventListener("click", function () {
        div.classList.toggle("background");
        var task_text = div.querySelector("#task-text")
        task_text.classList.toggle("text-decoration-line-through")
        updateCompleteStatus(task.id)
    })
    task_container.appendChild(div)

    if(task.complete == true){
        div.classList.toggle("background");
        var task_text = div.querySelector("#task-text")
        task_text.classList.toggle("text-decoration-line-through")
    }

    var delete_btns = document.querySelectorAll("#delete-btn")
    delete_btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            var task_div = (btn.parentNode).parentNode
            task_div.remove()
            deleteTaskFromLocalStorage(btn.parentNode.getAttribute("id"))
        })
    });
    task_input.value = ""
}

function addTaskToLocalStorage(TaskArray) {
    window.localStorage.setItem("tasks", JSON.stringify(TaskArray))
}

function updateCompleteStatus(id) {
    console.log(id)
    for (let i = 0; i < TaskArray.length; i++) {
        if (TaskArray[i].id == id) {
            TaskArray[i].complete == false ? TaskArray[i].complete = true : TaskArray[i].complete = false;
        }
    }
    addTaskToLocalStorage(TaskArray);
}

function deleteTaskFromLocalStorage(id){
    TaskArray = TaskArray.filter((task) => task.id != id);
    addTaskToLocalStorage(TaskArray);
}

function loadTasksFromLocalStorage(){
    if(window.localStorage.getItem("tasks")){
        var allTasks = JSON.parse(window.localStorage.getItem("tasks"))
        for (let i = 0; i < allTasks.length; i++) {
            addTask(allTasks[i]);
        }
    }
}

