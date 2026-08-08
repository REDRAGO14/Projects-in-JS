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
    let li = document.createElement('li')
    li.setAttribute("id" , task.id)
    li.innerHTML = `
    <span>${task.task}</span>
    <button>delete</button>`
    todos.append(li)
    if(task.isFinished){
             li.classList.add("completed")
            }else{
                li.classList.remove("completed")
             }
    li.addEventListener("click", (e)=>{
        
        if(e.target.tagName === "BUTTON") return;
        li.classList.toggle("completed")
        task.isFinished = !task.isFinished        
        saveToLocalstorage()
    })


}

function saveToLocalstorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
})