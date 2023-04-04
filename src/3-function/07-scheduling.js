const bodyElement = document.querySelector('body');
const buttonElement = document.createElement('button');

buttonElement.innerHTML = 'Clear Timeout';

bodyElement.appendChild(buttonElement);

console.log('Set Timeout & Interval');

const timeout = setTimeout(() => {
  console.log('setTimeout');
}, 5000);

const interval = setInterval(() => {
  console.log('setInterval');
}, 1000);

buttonElement.addEventListener('click', () => {
  console.log('Clear Timeout & Interval');

  clearTimeout(timeout);
  clearInterval(interval);
});
