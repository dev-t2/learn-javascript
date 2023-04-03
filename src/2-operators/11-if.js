const isPositive = (number) => {
  if (number > 0) {
    return 'Positive Number';
  } else if (number < 0) {
    return 'Negative Number';
  } else {
    return number;
  }
};

console.log(`isPositive(1): ${isPositive(1)}`);
console.log(`isPositive(-1): ${isPositive(-1)}`);
console.log(`isPositive(0): ${isPositive(0)}`);
