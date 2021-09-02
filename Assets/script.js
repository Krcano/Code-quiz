var questionsBox = document.querySelector("#question-box");
var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start')
var quizQuestions = [ {

    question:'Where do the <script> tags go in the HTML file?',
    possibleAnswers: ['A: In the head','B: In the body','C: neither','D: Both',],
    correctAnswer: 'In the body',
},
{   question:'what is the proper way to refer to an external script?',
    possibleAnswers: ['A: <script href ="***.js"','B: <script rel="***.js"','C: <script src="***.js'],
    correctAnswer: '<script src="***.js"',
   },
   { question:'How would you write a "Do you want to play?" as confirm message ',
    possibleAnswers: ['A: msg("Do you want to play?")','B: confirm(Do you want to play?)','C: confirm("Do you want to play?")'],
    correctAnswer: 'confirm("Do you want to play?"',
   },
   { question:'How do you write a function',
     possibleAnswers: ['A: function exampleFunction()','B: function = exampleFunction()','C: function: exampleFunction()'],
     correctAnswer: 'function exampleFunction()',
   },
   { question:'',
     possibleAnswers: ['','','','',],
     correctAnswer: '',
   },
   { question:'',
     possibleAnswers: ['','','','',],
     correctAnswer: '',
   },
]




// timer functions need to start after the user presses start
function timer(){
    var timeLeft = 100;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft + ' seconds';
            timeLeft --;
        } else if ( timeLeft === 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft + ' second';
        } else{ timerEl.textContent = ' ';
        clearInterval(timeInterval);
    }
    }, 1000);
}

var currentQuestion=0;

function startQuiz() {
console.log("startQuiz");
questionsBox.innerHTML ="";
var question = quizQuestions[currentQuestion];
var questionName= document.createElement("h1");
questionName.textContent= question.question;
questionsBox.appendChild(questionName);

for(var i=0; i < question.possibleAnswers.length; i++) {
    var questionAnswer = document.createElement("p");
    questionAnswer.textContent = question.possibleAnswers[i];
    questionsBox.appendChild(questionAnswer);
}
currentQuestion++;
}




document.addEventListener('click', startQuiz);
startEl.addEventListener('click', timer);



