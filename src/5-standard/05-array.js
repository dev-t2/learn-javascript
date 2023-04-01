const array1 = [1, 2, 3];

console.log(`length: ${array1.length}`);

console.log('');

console.log(array1[0]);
console.log(`at: ${array1.at(0)}`);
console.log(array1[array1.length - 1]);
console.log(`at: ${array1.at(-1)}`);

console.log('');

const array2 = [4, 5, 6, 7, 8, 9];

console.log(array1.concat(array2));
console.log([...array1, ...array2]);

console.log('');

console.log(`every: ${array2.every((arr) => arr < 10)}`);

console.log('');

const users = [
  { id: 1, name: 'User A', age: 18 },
  { id: 2, name: 'User B', age: 28 },
  { id: 3, name: 'User C', age: 35 },
];

const adults = users.filter((user) => user.age >= 19);

console.log({ adults });
