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

console.log(`padEnd: ${b.padEnd(10, '0')}`);
console.log(`padEnd: ${b.padEnd(5, '0')}`);

console.log('');

const c = 'Hello, Hello?!';

console.log(`replace: ${c.replace('Hello', 'Hi')}`);
console.log(`replace: ${c.replace(/Hello/g, 'Hi')}`);

console.log('');

const d = 'Hello World!';

console.log(`slice: ${d.slice(0, 5)}`);
console.log(`slice: ${d.slice(6, -1)}`);
console.log(`slice: ${d.slice(6)}`);

console.log('');

const e = 'Apple, Banana, Cherry';

console.log(e.split(','));
console.log(e.split(', '));
console.log(e.split('').reverse().join(''));

console.log('');

console.log(`toLowerCase: ${e.toLowerCase()}`);
console.log(`toUpperCase: ${e.toUpperCase()}`);

console.log('');

const f = '     Java   Script     ';

console.log(`trim: ${f.trim()}`);
