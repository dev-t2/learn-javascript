const a = 'Hello World';

console.log(`length: ${a.length}`);

console.log('');

console.log(`includes: ${a.includes('Hello')}`);
console.log(`includes: ${a.includes('hello')}`);
console.log(`includes: ${a.includes('Hello', 1)}`);

console.log('');

console.log(`indexOf: ${a.indexOf('World')}`);
console.log(`indexOf: ${a.indexOf('world')}`);

console.log('');

const b = '123456';

console.log(`padStart: ${b.padStart(10, '0')}`);
console.log(`padStart: ${b.padStart(5, '0')}`);

console.log('');

console.log(`padEnd: ${b.padEnd(10, '0')}`);
console.log(`padEnd: ${b.padEnd(5, '0')}`);
