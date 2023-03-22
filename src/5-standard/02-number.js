const pi = 3.1415926535;

console.log(`toFixed: ${pi.toFixed(2)}`);
console.log(`parseFloat: ${parseFloat(pi.toFixed(2))}`);

console.log('');

const a = 1000000;

console.log(`toLocaleString: ${a.toLocaleString()}`);

console.log('');

console.log(`isInteger: ${Number.isInteger(123)}`);
console.log(`isInteger: ${Number.isInteger(3.1415926535)}`);

console.log('');

console.log(`isNaN: ${Number.isNaN(NaN)}`);
console.log(`isNaN: ${Number.isNaN(123)}`);
console.log(`isNaN: ${Number.isNaN('Hello World')}`);
console.log(`isNaN: ${Number.isNaN(null)}`);

console.log('');

console.log(`parseInt: ${parseInt('3.1415926535', 10)}`);
console.log(`parseInt: ${parseInt(3.1415926535, 10)}`);

console.log('');

console.log(`parseInt: ${parseFloat('3.1415926535')}`);
console.log(`parseInt: ${parseFloat(3.1415926535)}`);
