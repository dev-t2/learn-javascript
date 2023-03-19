const bodyElement = document.querySelector('body');
const buttonElement = document.createElement('button');

buttonElement.innerHTML = 'Clear Timeout';

bodyElement.appendChild(buttonElement);

console.log('Set Schedule');

const timeout = setTimeout(() => {
  console.log('setTimeout');
}, 5000);

const interval = setInterval(() => {
  console.log('setInterval');
}, 1000);

buttonElement.addEventListener('click', () => {
  console.log('Clear Schedule');

  clearTimeout(timeout);
  clearInterval(interval);
});
