const functionA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('function A');

      resolve();
    }, 1000);
  });
};

const functionB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('function B');

      resolve();
    }, 1000);
  });
};

const functionC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('function C');

      resolve();
    }, 1000);
  });
};

const functionD = () => {
  setTimeout(() => {
    console.log('function D');
  }, 1000);
};

const main = async () => {
  await functionA();

  await functionB();

  await functionC();

  functionD();
};

main();
