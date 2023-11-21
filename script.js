let exerciseTime = 0;
let restTime = 0;
let setCount = 0;
let currentSet = 0;
let intervalId = null;
let remainingTime = 0; // New variable to track the remaining time

// Function to start or resume the timer
function startTimer() {
    if (intervalId === null) {
        if (currentSet === 0) {
            // Initial setup when the timer is first started
            exerciseTime = parseInt(document.getElementById('exercise-time').value, 10);
            restTime = parseInt(document.getElementById('rest-time').value, 10);
            setCount = parseInt(document.getElementById('set-count').value, 10);
            currentSet = 1;
            isExercisePhase = true;
            remainingTime = exerciseTime;
        }

        if (remainingTime > 0 && setCount > 0) {
            updateTimerDisplay(remainingTime);
            intervalId = setInterval(countdown, 1000);
        } else {
            alert("Please enter valid exercise, rest times, and set count.");
        }
    }
}

// Countdown function
function countdown() {
    remainingTime--;

    updateTimerDisplay(remainingTime);
    updateProgressBar();

    if (remainingTime === 0) {
        if (isExercisePhase) {
            isExercisePhase = false;
            remainingTime = restTime;
            updateTimerDisplay(remainingTime);
        } else {
            if (currentSet < setCount) {
                currentSet++;
                isExercisePhase = true;
                remainingTime = exerciseTime;
                updateTimerDisplay(remainingTime);
            } else {
                stopTimer();
            }
        }
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

// Stop the timer
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    currentSet = 0;
    isExercisePhase = true;
    remainingTime = 0;
    updateTimerDisplay(0);
    resetProgressBar();
}

// Reset the timer
function resetTimer() {
    stopTimer();
    document.getElementById('exercise-time').value = '';
    document.getElementById('rest-time').value = '';
    document.getElementById('set-count').value = '';
}

// Update timer display
function updateTimerDisplay(time) {
    document.getElementById('timer-display').textContent = formatTime(time);
}

// Format time in "MM:SS" format
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update progress bar and its color
function updateProgressBar() {
    let progressBar = document.getElementById('progress-bar');
    let totalTime = isExercisePhase ? parseInt(document.getElementById('exercise-time').value, 10) : parseInt(document.getElementById('rest-time').value, 10);
    let progress = (totalTime - remainingTime) / totalTime * 100;

    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = isExercisePhase ? 'green' : 'red';
}

// Reset progress bar
function resetProgressBar() {
    let progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
}

// Add event listeners to buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);