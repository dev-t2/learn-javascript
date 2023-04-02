if (true) {
  console.log(true);
}

if (false) {
  console.log(false);
}

console.log('');

if (123) {
  console.log(123);
}

if (0) {
  console.log(0);
}

if (-0) {
  console.log(-0);
}

if (0n) {
  console.log(-0);
}

console.log('');

if ('0') {
  console.log('0');
}

if ('') {
  console.log('');
}

console.log('');

if (null) {
  console.log(null);
}

if (undefined) {
  console.log(undefined);
}

if (NaN) {
  console.log(undefined);
}

const array1 = [1, 2];

if (array1) {
  console.log(array1);
}

const array2 = [];

if (array2.length) {
  console.log({ array2 });
}
