const array1 = new Array(1, 2, 3);

console.log(array1);
console.log(array1.length);
console.log(array1.includes(2));
console.log(array1.includes(4));

console.log('');

Array.prototype.custom = function () {
  console.log(this);
};

array1.custom();

const array2 = [];

array2.custom();

console.log('');

function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

const userA = new User('User A');
const userB = new User('User B');

console.log(userA);
console.log(userA.getName());

console.log(userB);
console.log(userB.getName(0));
