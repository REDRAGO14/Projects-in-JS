document.addEventListener("DOMContentLoaded", ()=>{

    let questionContainer = document.getElementById("question-container")
    let questionTextDisplay = document.getElementById("question-text")
    let choiceListDisplay = document.getElementById("choices-list")
    let nextBtn = document.getElementById("next-btn")
    let resultContainer = document.getElementById("result-container")
    let scoreDisplay = document.getElementById("score")
    let restartBtn = document.getElementById("restart-btn")
    let startBtn = document.getElementById("start-btn")

    const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which programming language is known as the language of the web?",
    choices: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    choices: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    choices: ["4", "22", "NaN", "Error"],
    answer: "22",
  },
  {
    question: "Which chemical element has the symbol 'O'?",
    choices: ["Gold", "Osmium", "Oxygen", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    choices: ["var", "let", "const", "static"],
    answer: "const",
  }
];

    startBtn.addEventListener("click", () =>{
        startBtn.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        restartBtn.classList.add("hidden")
        showQuestions()
    }) 
})