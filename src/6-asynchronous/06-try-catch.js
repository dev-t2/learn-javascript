const func = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number >= 4) {
        reject(number);
      } else {
        console.log(number);

        resolve(number);
      }
    }, 1000);
  });
};

const main = async () => {
  try {
    const res = await func(3);

    console.log(`Success: ${res}`);
  } catch (err) {
    console.error(`Error: ${err}`);
  } finally {
    console.log('Finally');
  }
};

main();
