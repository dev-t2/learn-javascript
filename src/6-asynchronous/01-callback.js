const functionA = (callback) => {
  setTimeout(() => {
    console.log(1);

    callback();
  }, 1000);
};

const functionB = (callback) => {
  setTimeout(() => {
    console.log(2);

    callback();
  }, 1000);
};

const functionC = (callback) => {
  setTimeout(() => {
    console.log(3);

    callback();
  }, 1000);
};

const functionD = () => {
  setTimeout(() => {
    console.log(4);
  }, 1000);
};

functionA(() => {
  functionB(() => {
    functionC(() => {
      functionD();
    });
  });
});
