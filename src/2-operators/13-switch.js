const getPrice = (fruit) => {
  switch (fruit) {
    case 'apple':
      return 1000;

    case 'banana':
      return 1500;

    case 'cherry':
      return 2000;

    default:
      return 0;
  }
};

console.log(getPrice('apple'));
console.log(getPrice('banana'));
console.log(getPrice('cherry'));
console.log(getPrice('switch'));
