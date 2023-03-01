if (true) {
  console.log(true);
}

if (false) {
  console.log(false);
}

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

if ('0') {
  console.log('0');
}

if ('') {
  console.log('');
}

if (null) {
  console.log(null);
}

if (undefined) {
  console.log(undefined);
}

if (NaN) {
  console.log(undefined);
}

const a = [1, 2];

if (a) {
  console.log({ a });
}

const b = [];

if (b.length) {
  console.log({ b });
}
