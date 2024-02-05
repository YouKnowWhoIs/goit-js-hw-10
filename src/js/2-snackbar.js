import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delay = document.querySelector('[name="delay"]');
const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"] ');
const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delayValue = delay.value;
  const isValid = fulfilled.checked ? fulfilled : rejected;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid === fulfilled) {
        resolve();
      } else {
        reject();
      }
    }, delayValue);
  });

  promise.then(onFullFiles).catch(onRejected);

  function onFullFiles() {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delayValue}ms`,
      position: 'topRight',
    });
  }

  function onRejected() {
    iziToast.error({
      message: `❌ Rejected promise in ${delayValue}ms`,
      position: 'topRight',
    });
  }

  form.reset();
}
