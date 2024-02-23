import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"] ');
const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delay = document.querySelector('[name="delay"]');

  const delayValue = delay.value;
  let isValid;
  if (fulfilled.checked) {
    isValid = fulfilled;
  } else {
    isValid = rejected;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid === fulfilled) {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise.then(onFullFiles).catch(onRejected);

  function onFullFiles(delayValue) {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delayValue}ms`,
      position: 'topRight',
    });
  }

  function onRejected(delayValue) {
    iziToast.error({
      message: `❌ Rejected promise in ${delayValue}ms`,
      position: 'topRight',
    });
  }

  form.reset();
}
