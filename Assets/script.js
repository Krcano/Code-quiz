
var questionsBox = document.querySelector('#question-box');
var highScore = document.getElementById('high-score')
var scoreCounter = 0
var timeLeft = 30;
var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start');
var restartEl = document.getElementById('restart-button');
var saveButton = document.getElementById('save');
var scoreList = document.getElementById('score-list');

var quizQuestions = [ 
    {
    question:'Where do the <script> tags go in the HTML file?',
    possibleAnswers: ['In the head','In the body','neither','Both',],
    correctAnswer: 'In the body',
   },
   { question:'what is the proper way to refer to an external script?',
    possibleAnswers: [ '<script href ="***.js"','<script rel="***.js"','<script src="***.js"'],
    correctAnswer: '<script src="***.js"',
   },
   { question:'How would you write a "Do you want to play?" as confirm message ',
    possibleAnswers: ['msg("Do you want to play?")','confirm(Do you want to play?)','confirm("Do you want to play?")'],
    correctAnswer: 'confirm("Do you want to play?")',
   },
   { question:'How do you write a function',
     possibleAnswers: ['function exampleFunction()','function = exampleFunction()','function: exampleFunction()'],
     correctAnswer: 'function exampleFunction()',
   },
   { question:'Which of the following takes precedence over the other if the variable names are the same?',
     possibleAnswers: ['local variable','global variable','both','neither',],
     correctAnswer: 'global variable',
   },
   { question:'Which of the following is the correct way to write an if statement?',
     possibleAnswers: ['if i == 5 then','if (i=5)then ','if(i===5)'],
     correctAnswer: 'if(i===5)',
   },
]




// timer functions need to start after the user presses start
function timer(){
   
    var timeInterval = setInterval(function () {

        if (timeLeft >= 0) {
            timerEl.textContent = 'Time Left: ' + timeLeft + ' seconds';
            timeLeft --;
        } 

        if ( timeLeft < 0) {
            clearInterval(timeInterval);
            timer=60;
         }
         if(timeLeft <= 0){
             quizOver();
         }
         
    }, 1000);

    
}


var currentQuestion=0;

// Start quiz function
function startQuiz() {

var introBox = document.querySelector('.box');
// hides intro content and start button
introBox.style.display = 'none';
startEl.style.display = 'none';


// clears the previous question from page
questionsBox.innerHTML ='';
var question = quizQuestions[currentQuestion];
var questionName= document.createElement('h1');
questionName.textContent= question.question;
questionsBox.appendChild(questionName);
console.log(question.question);

for(var i=0; i < question.possibleAnswers.length; i++) {
    var questionAnswer = document.createElement('button');
    questionAnswer.addEventListener('click', function(){
        if(question.correctAnswer === this.textContent){
            console.log(true);
            scoreCounter++;
        } else{ 
            timeLeft-=10;
        } 
        
        if(currentQuestion < quizQuestions.length){
            startQuiz();
        }else{
            quizOver();
        }
        // console.log(this.textContent)
        
    } )

    questionAnswer.textContent = question.possibleAnswers[i];
    questionsBox.appendChild(questionAnswer);
}

currentQuestion++;
    
} 

// showing end of quiz content
var quizOverEl = document.querySelectorAll('#quiz-content');

function quizOver(){
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('question-box').style.display = 'none';
    document.getElementById('restart-button').style.display = 'block'; 
    
}

// saves score to local storage
function saveGrade(){
   
var userName = document.getElementById('initials') ;
var gradeScore = {
    name: userName.value,
    grade: scoreCounter,
}; 
var gradesaver = localStorage.setItem('gradeScore', JSON.stringify(gradeScore));
// localStorage.setItem('gradeScore', JSON.stringify(gradeScore)); THIS IS WHAT IM TRYING TO FIGURE OUT k

var storageSaves = JSON.parse(localStorage.getItem('gradeScore'));
if(storageSaves.length > 0){
    storageSaves.push(gradeScore)
} else{
    storageSaves = [gradeScore];
}
window.localStorage.setItem('gradeScore', JSON.stringify(storageSaves));
}

// translates the grade the local storage
function renderGrade(){
    var lastGrade = JSON.parse(localStorage.getItem('gradeScore'));
    if(lastGrade !== null){
        scoreList.innerHTML='';
        for (let i = 0; i < lastGrade.length; i++) {
            var score= lastGrade[i]
            var li = document.createElement('li');
            li.textContent = `  ${score.name} score: ${score.grade}` ;
            scoreList.appendChild(li);
        }
    } else{
        return;
    }
    
} console.log(localStorage.getItem('storageSaves'));




// All event listeners
highScore.addEventListener('click', function(){
    renderGrade();
})


restartEl.addEventListener('click', function(){
    currentQuestion = 0;
    timeLeft = 60;
    startQuiz();
})
saveButton.addEventListener('click', function(event){
    event.preventDefault();
   saveGrade();
   renderGrade();

})
startEl.addEventListener('click', function(){
    timer()
    startQuiz()
    
});


