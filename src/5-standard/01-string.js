const a = 'Hello World';

console.log(`a: ${a}`);

console.log('');

console.log(`length: ${a.length}`);

console.log('');

console.log(`includes('Hello'): ${a.includes('Hello')}`);
console.log(`includes('hello'): ${a.includes('hello')}`);
console.log(`includes('Hello', 1): ${a.includes('Hello', 1)}`);

console.log('');

console.log(`indexOf('World'): ${a.indexOf('World')}`);
console.log(`indexOf('world'): ${a.indexOf('world')}`);

console.log('');

const b = '123456';

console.log(`b: ${b}`);

console.log('');

console.log(`padStart(10, '0'): ${b.padStart(10, '0')}`);
console.log(`padStart(5, '0'): ${b.padStart(5, '0')}`);

console.log('');

console.log(`padEnd(10, '0'): ${b.padEnd(10, '0')}`);
console.log(`padEnd(5, '0'): ${b.padEnd(5, '0')}`);

console.log('');

const c = 'Hello, Hello?!';

console.log(`c: ${c}`);

console.log('');

console.log(`replace('Hello', 'Hi'): ${c.replace('Hello', 'Hi')}`);
console.log(`replace(/Hello/g, 'Hi'): ${c.replace(/Hello/g, 'Hi')}`);

console.log('');

const d = 'Hello World!';

console.log(`d: ${d}`);

console.log('');

console.log(`slice(0, 5): ${d.slice(0, 5)}`);
console.log(`slice(6, -1): ${d.slice(6, -1)}`);
console.log(`slice(6): ${d.slice(6)}`);

console.log('');

const e = 'Apple, Banana, Cherry';

console.log(`e: ${e}`);

console.log('');

console.log(e.split(','));
console.log(e.split(', '));
console.log(`split('').reverse().join(''): ${e.split('').reverse().join('')}`);

console.log('');

console.log(`toLowerCase: ${e.toLowerCase()}`);
console.log(`toUpperCase: ${e.toUpperCase()}`);

console.log('');

const f = '     Java   Script     ';

console.log(`f: ${f}`);

console.log('');

console.log(`trim: ${f.trim()}`);
