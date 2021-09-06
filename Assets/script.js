
var questionsBox = document.querySelector('#question-box');
var highScore = document.getElementById('high-score')
var scoreCounter = 0
var timeLeft = 60;
var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start');
var restartEl = document.getElementById('restart-button');
var saveButton = document.getElementById('save');

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
    // document.getElementById('restart-button').style.display = 'block'; DOESNT WORK
    
}

// saves score to local storage
function saveGrade(){
var userName = document.getElementById('initials') ;
var gradeScore = {
    name: userName.value,
    grade: scoreCounter,
};
window.localStorage.setItem('gradeScore', JSON.stringify(gradeScore));
}

function renderGrade(){
    var lastGrade = JSON.parse(localStorage.getItem('gradeScore'));
    if(lastGrade !== null){
        document.getElementById('initials').innerHTML = lastGrade.name;
       
        document.getElementById('highScore').innerHTML = lastGrade.grade;
                       // causing and unknown error ^ 
    } else{
        return;
    }
    
} console.log(JSON.parse(localStorage.getItem('gradeScore')));



// restartEl.addEventListener('click', function(){
//     startQuiz();
// })
saveButton.addEventListener('click', function(event){
    event.preventDefault();
   saveGrade();
   renderGrade();

})
startEl.addEventListener('click', function(){
    timer()
    startQuiz()
    
});


// function init(){
//     renderGrade();
// }
// init();










// function setScore(){
//     highScore.textContent = scoreCounter;
//     localStorage.setItem('scoreCount', scoreCounter);
// }
// setScore();





// // get score from client sotrage if it exists
// function correctAnswerCounter() {
//     var storedCorrect = localStorage.getItem('scoreCount');
//     if(storedCorrect === null){
//         scoreCounter=0;
//     } else{
//         scoreCounter= storedCorrect;
//     }
// }




// document.addEventListener('click', startQuiz);



/*get all the high score out of all local storage if no high score se it to 0
select high score element find the text conent of the highest scroe  equal to the value you get from local sotar
click on save score button rtrieve values from local storage, should be an array of objects and each should have key of score and key of name 
adding objects to arrays and adding data to an object with a key of score name*/

// localStorage.push({
//     name: variable of name that user entered,
//     score: scoreCounter,

// })
// get the user name 
    // give option to save score
    // restart the quiz
    // header enter name, button to save score,text box to enter name, button to restart
    // create a div called quiz for all the quiz and set the display to none and set quiz over div display inline
