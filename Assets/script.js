var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start')


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
timer();


