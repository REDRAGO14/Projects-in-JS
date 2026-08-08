let addTask = document.getElementById("add-task-btn")
let taskInput =document.getElementById("todo-input")
let taskList =document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
tasks.forEach(task => {
   renderTask(task)
});

addTask.addEventListener("click",()=>{
    let taskText = taskInput.value.trim()
    if(taskText === "") return;
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        isCompleted: false
    }

    tasks.push(newTask)
    renderTask(newTask)
    saveTasksToLocalstorage();
    taskInput.value = ""
})

function renderTask(Task){
    let li = document.createElement("li")
    li.setAttribute("id", Task.id)
    li.innerHTML = `
    <span>${Task.text}</span>
    <button>delete</button>`
    taskList.append(li)
    if(Task.isCompleted){
         li.classList.add("completed")
    }
    li.addEventListener("click", (e) =>{
        if(e.target.tagName == "BUTTON") return;
        li.classList.toggle("completed")
        Task.isCompleted = !Task.isCompleted
        saveTasksToLocalstorage()
    })

    li.addEventListener("click", (e) =>{
        if(e.target.tagName === "BUTTON"){
           tasks =  tasks.filter(items => items.id !== Number(li.id))
            
            li.remove()
           saveTasksToLocalstorage()
        }
    })
}

function saveTasksToLocalstorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}