const functionA = (number, callback, error) => {
  setTimeout(() => {
    if (number >= 4) {
      error();
    } else {
      console.log(number);

      callback();
    }
  }, 1000);
};

functionA(
  3,
  () => {
    console.log('Success');
  },
  () => {
    console.error('Error');
  }
);
