document.addEventListener("DOMContentLoaded", function(){
let button = document.getElementById("add-task-btn")
let input = document.getElementById("todo-input")
let todos = document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) ||[]
tasks.forEach(task => renderTask(task))


button.addEventListener("click", function(){
    let inputText = input.value.trim()
    if(inputText === "") return;

    let newTask = {
        id: Date.now(),
        task: inputText,
        isFinished: false
    }

    tasks.push(newTask)
    saveToLocalstorage()
    console.log(tasks);
    
    input.value = ""
    

    
})
function renderTask(task){
    let todo =document.createElement('li').textContent = task.task
    todos.append(todo)
}

function saveToLocalstorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
})