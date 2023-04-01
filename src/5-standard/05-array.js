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

const updatedUsers = users.map((user) => {
  return { ...user, email: null };
});

console.log(updatedUsers);

console.log('');

const totalAge = users.reduce((result, user) => result + user.age, 0);
const averageAge = (totalAge / users.length).toFixed(1);

console.log(`totalAge: ${totalAge}`);
console.log(`averageAge: ${averageAge}`);

console.log('');

const userNames = users.reduce((result, user) => [...result, user.name], []).join(', ');

console.log(userNames);

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

console.log('');

console.log(`join: ${array4.join()}`);
console.log(`join: ${array4.join(', ')}`);
console.log(`join: ${array4.join(' / ')}`);

console.log('');

const array5 = [1, 2, 3];

console.log(array5);
console.log(`pop: ${array5.pop()}`);
console.log(array5);

console.log('');

console.log(`push: ${array5.push(3)}`);
console.log(array5);
console.log(`push: ${array5.push(4, 5)}`);
console.log(array5);

console.log('');

console.log(array5.reverse());
console.log(array5);

console.log('');

console.log(`shift: ${array5.shift()}`);
console.log(array5);

console.log('');

const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array6.slice(0, 3));
console.log(array6.slice(4, -1));
console.log(array6.slice(4));

console.log('');

console.log(`some: ${array6.some((arr) => arr > 5)}`);
console.log(`some: ${array6.some((arr) => arr > 9)}`);

console.log('');

const array7 = [4, 8, 1, 100, 0, 16];

console.log(array7);

console.log('');

console.log(array7.sort());
console.log(array7);

console.log('');

console.log(array7.sort((a, b) => a - b));
console.log(array7);

console.log('');

console.log(array7.sort((a, b) => b - a));
console.log(array7);

console.log('');

const array8 = [1, 2, 3];

console.log(array8);

console.log('');

console.log(array8.splice(2, 0, 4));
console.log(array8);

console.log('');

console.log(array8.splice(1, 2, 5, 6));
console.log(array8);

console.log('');

const array9 = [1, 2, 3];

console.log(`unshift: ${array9.unshift(4)}`);
console.log(array9);

console.log('');

const arrayLike1 = {
  0: 0,
  1: 1,
  2: 2,
  length: 3,
};

const arrayLike2 = {
  0: 0,
  1: 1,
  2: 2,
};

console.log(`isArray: ${arrayLike1.constructor === Array}`);
console.log(`isObject: ${arrayLike1.constructor === Object}`);

Array.from(arrayLike1).forEach((arr) => console.log(`arrayLike1: ${arr}`));
Array.from(arrayLike2).forEach((arr) => console.log(`arrayLike2: ${arr}`));

console.log('');

const array10 = [1, 2, 3];

console.log(`isArray: ${Array.isArray(array10)}`);
console.log(`isArray: ${Array.isArray(arrayLike1)}`);
