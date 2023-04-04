const func1 = (callback) => {
  console.log('func1');

  callback();
};

const func2 = () => {
  console.log('func2');
};

func1(func2);

console.log('');

const func3 = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

func3(1, 2, (result) => {
  console.log(`result: ${result}`);
});

const loadImage = (url, callback) => {
  const imgElement = document.createElement('img');

  imgElement.src = url;

  imgElement.addEventListener('load', () => {
    setTimeout(() => {
      callback(imgElement);
    }, 1000);
  });
};

const bodyElement = document.querySelector('body');

bodyElement.innerHTML = 'Loading...';

loadImage(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433',
  (imgElement) => {
    bodyElement.innerHTML = '';

    bodyElement.appendChild(imgElement);
  }
);
