console.log(`Math.abs(4): ${Math.abs(4)}`);
console.log(`Math.abs(-4): ${Math.abs(-4)}`);

console.log('');

console.log(`Math.ceil(3.1415926535): ${Math.ceil(3.1415926535)}`);
console.log(`Math.round(3.1415926535): ${Math.round(3.1415926535)}`);
console.log(`Math.round(4.56): ${Math.round(4.56)}`);
console.log(`Math.floor(3.1415926535): ${Math.floor(3.1415926535)}`);

console.log('');

console.log(`Math.max(4, 8, 16, 1000, 32): ${Math.max(4, 8, 16, 1000, 32)}`);
console.log(`Math.min(4, 8, 16, -10, 32): ${Math.min(4, 8, 16, -10, 32)}`);

console.log('');

console.log(`Math.pow(4, 2): ${Math.pow(4, 2)}`);
console.log(`Math.pow(10, 3): ${Math.pow(10, 3)}`);

console.log('');

console.log(`Math.random(): ${Math.random()}`);

console.log('');

const getRandom = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
};

console.log(`getRandom(): ${getRandom()}`);
console.log(`getRandom(10, 20): ${getRandom(10, 20)}`);
