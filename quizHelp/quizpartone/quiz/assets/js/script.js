var questionsContainer = document.querySelector("#questions-container");
var startGameButton = document.querySelector("#start-game");

var questions = [
  {
    question: "Question One",
    answers: ["one", "two", "three", "four"],
    correctAnswer: "one",
  },
  {
    question: "Question Two",
    answers: ["one", "two", "three", "four"],
    correctAnswer: "two",
  },
  {
    question: "Question Three",
    answers: ["one", "two", "three", "four"],
    correctAnswer: "three",
  },
  {
    question: "Question Four",
    answers: ["one", "two", "three", "four"],
    correctAnswer: "four",
  },
];

var currentQuestionIndex = 0;

function startGame() {
  questionsContainer.innerHTML = "";
  var question = questions[currentQuestionIndex];
  var questionTitle = document.createElement("h1");
  questionTitle.textContent = question.question;
  questionsContainer.appendChild(questionTitle);

  for (var i = 0; i < question.answers.length; i++) {
    var questionAnswer = document.createElement("p");
    questionAnswer.textContent = question.answers[i];
    questionsContainer.appendChild(questionAnswer);
  }
  currentQuestionIndex++;
}

document.addEventListener("click", startGame);
