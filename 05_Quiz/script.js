document.addEventListener("DOMContentLoaded", () => {
  let questionContainer = document.getElementById("question-container");
  let questionTextDisplay = document.getElementById("question-text");
  let choiceListDisplay = document.getElementById("choices-list");
  let nextBtn = document.getElementById("next-btn");
  let resultContainer = document.getElementById("result-container");
  let scoreDisplay = document.getElementById("score");
  let restartBtn = document.getElementById("restart-btn");
  let startBtn = document.getElementById("start-btn");

  let currentQuestionIndex = 0;
  let score = 0;

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
      question:
        "Which programming language is known as the language of the web?",
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
      question:
        "Which keyword is used to declare a variable that cannot be reassigned?",
      choices: ["var", "let", "const", "static"],
      answer: "const",
    },
  ];

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    restartBtn.classList.add("hidden");
    showQuestions();
  });

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestions();
    } else {
      console.log("finished");
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove("hidden");
    choiceListDisplay.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    restartBtn.classList.remove("add");
    showQuestions();
  });

  function showQuestions() {
    console.log("show question fn called");
    choiceListDisplay.innerHTML = "";
    questionTextDisplay.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].choices.forEach((choice, index) => {
      let li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        selectedAnswer(choice);
      });
      choiceListDisplay.append(li);
    });
  }

  function selectedAnswer(choice) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
      console.log(score);
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    choiceListDisplay.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} outof ${questions.length}`;
    restartBtn.classList.remove("hidden");
  }
});
