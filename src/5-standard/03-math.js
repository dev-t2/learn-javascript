console.log(`abs: ${Math.abs(4)}`);
console.log(`abs: ${Math.abs(-4)}`);

console.log('');

console.log(`ceil: ${Math.ceil(3.1415926535)}`);
console.log(`round: ${Math.round(3.1415926535)}`);
console.log(`round: ${Math.round(4.56)}`);
console.log(`floor: ${Math.floor(3.1415926535)}`);

console.log('');

console.log(`max: ${Math.max(4, 8, 16, 1000, 32)}`);
console.log(`min: ${Math.min(4, 8, 16, -10, 32)}`);

console.log('');

console.log(`pow: ${Math.pow(4, 2)}`);
console.log(`pow: ${Math.pow(10, 3)}`);

console.log('');

console.log(`random: ${Math.random()}`);

console.log('');

const random = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
};

console.log(`random function: ${random()}`);
console.log(`random function: ${random(10, 20)}`);
