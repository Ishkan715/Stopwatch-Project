const timeCount = document.querySelector('p');
const counter = document.querySelector('p');
const stopBtn = document.getElementById('button-stop');
const startBtn = document.getElementById('button-start');
const resetBtn = document.getElementById('button-reset');
const now = new Date();
const options = {
  timeStyle: 'long',
  dateStyle: 'short',
};

stopBtn.disabled = true;
resetBtn.disabled = true;

let timer;

const currentTime = setInterval(function (now) {
  //   const curHour = date.getHours();
  //   const curMin = date.getMinutes();
  //   const curSec = date.getSeconds();
  document.getElementById('time').textContent = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(now);
}, 1);

const startTimer = function () {
  const tick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    counter.textContent = `${min}m:${sec}s`;
    time++;
  };

  let time = 0;

  tick();
  const timer = setInterval(tick, 1000);

  console.log(timer);

  return timer;
};

resetBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (timer) clearInterval(timer);
  timer = startTimer();

  console.log(timer);

  counter.textContent = `00m:00s`;
  stopBtn.disabled = true;
});

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  startTimer();
});

stopBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (timer) clearInterval(timer);
  timer = startTimer();

  console.log(timer);
  startBtn.textContent = 'Resume';
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
