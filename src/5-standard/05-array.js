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

console.log(adults);

console.log('');

const findUser = users.find((user) => user.age >= 19);

console.log(findUser);

const index = users.findIndex((user) => user.age >= 19);

console.log(index);

console.log('');

const array3 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(array3.flat());
console.log(array3.flat(2));
console.log(array3.flat(Infinity));

const array4 = [1, 2, 3];

console.log('');

array4.forEach((arr) => console.log(arr));

console.log('');

for (let i = 0; i < array4.length; i += 1) {
  if (i > 1) {
    break;
  }

  console.log(array4[i]);
}

console.log('');

console.log(`includes: ${array4.includes(2)}`);
console.log(`includes: ${array4.includes(4)}`);

console.log('');

console.log(`includes: ${users.includes({ id: 3, name: 'User C', age: 35 })}`);
console.log(`includes: ${users.includes(users[2])}`);
