const functionA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);

      resolve();
    }, 1000);
  });
};

const functionB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);

      resolve();
    }, 1000);
  });
};

const functionC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);

      resolve();
    }, 1000);
  });
};

const functionD = () => {
  setTimeout(() => {
    console.log(4);
  }, 1000);
};

const main = async () => {
  await functionA();

  await functionB();

  await functionC();

  functionD();
};

main();
