const functionA = (callback) => {
  setTimeout(() => {
    console.log('function A');

    callback();
  }, 1000);
};

const functionB = (callback) => {
  setTimeout(() => {
    console.log('function B');

    callback();
  }, 1000);
};

const functionC = (callback) => {
  setTimeout(() => {
    console.log('function C');

    callback();
  }, 1000);
};

const functionD = () => {
  setTimeout(() => {
    console.log('function D');
  }, 1000);
};

functionA(() => {
  functionB(() => {
    functionC(() => {
      functionD();
    });
  });
});
