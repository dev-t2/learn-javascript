console.log(JSON.stringify('JavaScript'));
console.log(JSON.stringify(123));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ id: 1, name: 'User A' }));
console.log(JSON.stringify([1, 2, 3]));

console.log('');

console.log(JSON.parse('"JavaScript"'));
console.log(JSON.parse('123'));
console.log(JSON.parse('false'));
console.log(JSON.parse('null'));
console.log(JSON.parse('{"id": 1, "name": "User A"}'));
console.log(JSON.parse('[1, 2, 3]'));
