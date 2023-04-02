console.log(`typeof 123 === 'number': ${typeof 123 === 'number'}`);
console.log(`typeof 'hello' === 'string': ${typeof 'hello' === 'string'}`);
console.log(`typeof true === 'boolean': ${typeof true === 'boolean'}`);
console.log(`typeof undefined === 'undefined': ${typeof undefined === 'undefined'}`);

console.log('');

console.log(`typeof null === 'object': ${typeof null === 'object'}`);

const call = Object.prototype.toString.call(null);

console.log(`call: ${call}`);

const type = call.slice(8, -1).toLowerCase();

console.log(`type: ${type}`);

console.log('');

console.log(`typeof [] === 'object': ${typeof [] === 'object'}`);
console.log(`[].constructor === Array: ${[].constructor === Array}`);

console.log('');

console.log(`typeof {} === 'object': ${typeof {} === 'object'}`);
console.log(`{}.constructor === Object: ${{}.constructor === Object}`);

console.log('');

console.log(`typeof function () {} === 'function': ${typeof function () {} === 'function'}`);

console.log('');

const checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

console.log(`checkType(123): ${checkType(123)}`);
console.log(`checkType('hello'): ${checkType('hello')}`);
console.log(`checkType(true): ${checkType(true)}`);
console.log(`checkType(undefined): ${checkType(undefined)}`);
console.log(`checkType(null): ${checkType(null)}`);
console.log(`checkType([]): ${checkType([])}`);
console.log(`checkType({}): ${checkType({})}`);
console.log(`checkType(function () {}): ${checkType(function () {})}`);
