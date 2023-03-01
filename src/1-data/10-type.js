console.log(typeof 123 === 'number');

console.log(typeof 'hello' === 'string');

console.log(typeof true === 'boolean');

console.log(typeof undefined === 'undefined');

console.log(typeof null === 'object');
console.log(Object.prototype.toString.call(null).slice(8, -1).toLowerCase() === 'null');

console.log(typeof [] === 'object');
console.log([].constructor === Array);

console.log(typeof {} === 'object');
console.log({}.constructor === Object);

console.log(typeof function () {} === 'function');

const checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

console.log(checkType(123));
console.log(checkType('hello'));
console.log(checkType(true));
console.log(checkType(undefined));
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(function () {}));
