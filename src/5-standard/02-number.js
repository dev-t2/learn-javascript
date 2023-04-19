const pi = 3.1415926535;

console.log(`pi: ${pi}`);

console.log('');

console.log(`toFixed(2): ${pi.toFixed(2)}`);
console.log(`parseFloat: ${parseFloat(pi.toFixed(2))}`);

console.log('');

const a = 1000000;

console.log(`a: ${a}`);

console.log('');

console.log(`toLocaleString: ${a.toLocaleString()}`);

console.log('');

console.log(`isInteger(123): ${Number.isInteger(123)}`);
console.log(`isInteger(3.1415926535): ${Number.isInteger(3.1415926535)}`);

console.log('');

console.log(`isNaN(NaN): ${Number.isNaN(NaN)}`);
console.log(`isNaN(123): ${Number.isNaN(123)}`);
console.log(`isNaN('Hello World'): ${Number.isNaN('Hello World')}`);
console.log(`isNaN(null): ${Number.isNaN(null)}`);

console.log('');

console.log(`parseInt('3.1415926535', 10): ${parseInt('3.1415926535', 10)}`);
console.log(`parseInt(3.1415926535, 10): ${parseInt(3.1415926535, 10)}`);

console.log('');

console.log(`parseFloat('3.1415926535'): ${parseFloat('3.1415926535')}`);
console.log(`parseFloat(3.1415926535): ${parseFloat(3.1415926535)}`);
