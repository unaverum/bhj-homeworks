const countdown = function() {
    const timerValue = document.getElementById('timer');

    if (timerValue.textContent > 0) {
        timerValue.textContent --;
    }
    else {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе!');
    }
}
const intervalID = setInterval(countdown, 1000);