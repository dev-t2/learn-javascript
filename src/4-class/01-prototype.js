const array1 = new Array(1, 2, 3);

console.log(array1);
console.log(`length: ${array1.length}`);
console.log(`includes(2): ${array1.includes(2)}`);
console.log(`includes(4): ${array1.includes(4)}`);

console.log('');

Array.prototype.custom = function () {
  console.log(this);
};

array1.custom();

console.log('');

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

console.log(userA);
console.log(`getName: ${userA.getName()}`);
