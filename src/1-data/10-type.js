console.log(typeof 123 === 'number');

console.log('');

console.log(typeof 'hello' === 'string');

console.log('');

console.log(typeof true === 'boolean');

console.log('');

console.log(typeof undefined === 'undefined');

console.log('');

console.log(typeof null === 'object');
console.log(Object.prototype.toString.call(null).slice(8, -1).toLowerCase() === 'null');

console.log('');

console.log(typeof [] === 'object');
console.log([].constructor === Array);

console.log('');

console.log(typeof {} === 'object');
console.log({}.constructor === Object);

console.log('');

console.log(typeof function () {} === 'function');

console.log('');

const checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

console.log(checkType(123));

console.log('');

console.log(checkType('hello'));

console.log('');

console.log(checkType(true));

console.log('');

console.log(checkType(undefined));

console.log('');

console.log(checkType(null));

console.log('');

console.log(checkType([]));

console.log('');

console.log(checkType({}));

console.log('');

console.log(checkType(function () {}));
