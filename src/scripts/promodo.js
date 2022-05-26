const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const time = document.querySelector(".time");
const timerContent = document.querySelector(".timer__content");
const timeTo = document.querySelector(".time-to");
const settings = document.querySelector(".btn-settings");
const pomodoro = document.querySelector("#pomodoro");
const short = document.querySelector("#short");
let workTime;
let breakTime;
let timeToWork = 5;
let timeToBreak = 5;
let isWorkTime = true;

settings.addEventListener("click", () => {
   timeToWork = +pomodoro.value * 60;
   timeToBreak = +short.value * 60;
});

function startWorkTime() {
  let minutes = Math.floor(timeToWork / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor(timeToWork % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = `${minutes}:${seconds}`;
  timeToWork--;
  if (timeToWork < 0) {
    clearInterval(workTime);
    breakTime = setInterval(startBreakTime, 1000);
    audio.play();
  }
}
startWorkTime();

function startBreakTime() {
  let minutes = Math.floor(timeToBreak / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor(timeToBreak % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = `${minutes}:${seconds}`;
  timeToBreak--;
  if (timeToBreak < 0) {
    clearInterval(breakTime);
    audio.play();
  }
  timeTo.innerHTML = "Short break";
  timerContent.classList.add("break");
  startBtn.classList.add("break-button");
  pauseBtn.classList.add("break-button");
  resetBtn.classList.add("break-button");
  if (timeToBreak < 0) {
    timeToWork = +pomodoro.value * 60 ;
    timeToBreak = +short.value * 60;
    startWorkTime();
    workTime = setInterval(startWorkTime, 1000);
    startBtn.disabled = true; 
    timeTo.innerHTML = "POMODORO";
  }
}

startBtn.addEventListener("click", () => {
	audio.play();
	if (isWorkTime) { 
    workTime = setInterval(startWorkTime, 1000); 
  } else { 
    breakTime = setInterval(startBreakTime, 1000); 
  } 
  startBtn.disabled = true; 
});

// if(+short.value === 0 && timeToBreak === 0) {
//         pomodoro.value = workTime
//         short.value = breakTime
// }

pauseBtn.addEventListener("click", () => {
  clearInterval(workTime);
  clearInterval(breakTime);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
   timeToWork = 5;
   timeToBreak = 5;
   pomodoro.value = 15;
   short.value = 5;
   clearInterval(workTime);
  clearInterval(breakTime);
   startBtn.disabled = false;
});


