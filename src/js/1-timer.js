// iziToast - flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// iziToast - librreary
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const calendar = document.querySelector('#datetime-picker');
const startbtn = document.querySelector('button[data-start]');
const daysTime = document.querySelector('[data-days]');
const hoursTime = document.querySelector('[data-hours]');
const minutesTime = document.querySelector('[data-minutes]');
const secondsTime = document.querySelector('[data-seconds]');

startbtn.disabled = true;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: null,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(calendar, options, {
  dateFormat: 'Y-m-d H:i',
});

calendar.addEventListener('input', activeBtn);

function activeBtn() {
  const selectedDate = new Date(calendar.value);

  if (selectedDate > new Date()) {
    startbtn.disabled = false;
    userSelectedDate = selectedDate;
  } else {
    userSelectedDate = null;
    iziToast.error({
      message: 'Please choose a date in the future',
      position: 'topRight',
    });
  }
}

class Timer {
  constructor(tick) {
    this.intervalId = null;
    this.tick = tick;
  }

  start() {
    const init = userSelectedDate.getTime();

    this.intervalId = setInterval(() => {
      const diff = userSelectedDate.getTime() - Date.now();
      if (diff <= 0) {
        clearInterval(this.intervalId);
        startbtn.disabled = true;
        calendar.disabled = false;
      }
      const time = this.convertMs(diff);
      this.tick(time);
    }, 1000);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

function formatTime({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, 0);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);

  return { days, hours, minutes, seconds };
}

function onTime(time) {
  const str = formatTime(time);
  daysTime.textContent = str.days;
  hoursTime.textContent = str.hours;
  minutesTime.textContent = str.minutes;
  secondsTime.textContent = str.seconds;
}

const timer = new Timer(onTime);

startbtn.addEventListener('click', () => {
  console.log('start');
  calendar.disabled = true;
  startbtn.disabled = true;
  timer.start();
});
