const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };
const source3 = { c: 5, d: 6 };

const result1 = Object.assign({}, source1, source2, source3);
const result2 = { ...source1, ...source2, ...source3 };

console.log({ result1, result2 });

console.log('');

const users = { id: 1, name: 'User A', age: 35 };

console.log(Object.entries(users));

for (const [key, value] of Object.entries(users)) {
  console.log({ key, value });
}

console.log('');

console.log(Object.keys(users));

console.log('');

console.log(Object.values(users));
