var task_input = document.getElementById("task-input")
var add_btn = document.getElementById("add-btn")
var task_container = document.getElementById("task-container")

task_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        add_btn.click()
    }
})

add_btn.addEventListener('click', () => {
    if (task_input.value != ""){
        task_container.querySelector("h4").classList.remove("d-block")
        task_container.querySelector("h4").classList.add("d-none")
        var div = document.createElement('div');
        div.className = 'row bg-light py-3 rounded-5 mt-3 mb-3 text-start ps-4';
        div.innerHTML = `
                <p id="task-text" class="col-md-10 card-text fs-5 pe-4 pt-1">${task_input.value}</p>
                <div class="col-md-2 text-center">
                    <button id="delete-btn" class="btn btn-danger rounded-5"><i class="fa fa-close"></i></button>
                </div>
        `
        div.addEventListener("click", function() {
            div.classList.toggle("background");
        });
        task_container.appendChild(div)
        task_input.value = ""
        div.addEventListener('click', () => {
            var task_text = div.querySelector("#task-text")
            task_text.classList.toggle("text-decoration-line-through")            
        })

        var delete_btns = document.querySelectorAll("#delete-btn")
        delete_btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                var task_div = (btn.parentNode).parentNode
                task_div.remove()
                
            })
        });
    }
})



