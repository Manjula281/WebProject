let timer;
let totalTime;

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = (hours * 3600) + (minutes * 60) + seconds;

    if (totalTime > 0) {
        document.getElementById('stopButton').disabled = false;
        updateDisplay(totalTime);
        timer = setInterval(() => {
            totalTime--;
            if (totalTime <= 0) {
                clearInterval(timer);
                alert("Time's up!");
                document.getElementById('stopButton').disabled = true;
            }
            updateDisplay(totalTime);
        }, 1000);
    } else {
        alert("Please enter a valid duration.");
    }
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('stopButton').disabled = true;
}

function updateDisplay(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById('timerDisplay').innerText = `
        ${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:
        ${String(seconds).padStart(2, '0')}`.replace(/\s/g, '');
}
