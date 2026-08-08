let button = document.getElementById("add-task-btn")
let input = document.getElementById("todo-input")
let todos = document.getElementById("todo-list")

let tasks =[]

button.addEventListener("click", function(){
    let inputText = input.value.trim()
    if(inputText === "") return;

    let newTask = {
        id: Date.now(),
        task: inputText,
        isFinished: false
    }

    tasks.push(newTask)
    input.value = ""
    
    
})