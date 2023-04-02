const func = (number, callback, error) => {
  setTimeout(() => {
    if (number >= 4) {
      error(number);
    } else {
      console.log(number);

      callback(number);
    }

    console.log('Finally');
  }, 1000);
};

func(
  3,
  (res) => {
    console.log(`Success: ${res}`);
  },
  (err) => {
    console.error(`Error: ${err}`);
  }
);
