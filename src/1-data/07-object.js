const obj1 = new Object();

obj1.name = 'User A';

console.log(obj1);

console.log('');

function Object2() {
  this.name = 'User B';
}

const obj2 = new Object2();

console.log(obj2);

console.log('');

const obj3 = { id: 1, name: 'User C', age: 100, age: 35 };

console.log(obj3);
console.log(`obj3.name: ${obj3.name}`);
console.log(`obj3['name']: ${obj3['name']}`);

const key = 'name';

console.log(`key: ${key}`);
console.log(`obj3[key]: ${obj3[key]}`);

console.log('');

const obj4 = { id: 2, name: 'User D', age: 16, parent: obj3 };

console.log(obj4);
console.log(obj4.parent);
console.log(`obj4.parent.name: ${obj4.parent.name}`);
console.log(`obj4.parent['name']: ${obj4.parent['name']}`);
console.log(`obj4['parent'].name: ${obj4['parent'].name}`);
console.log(`obj4['parent']['name']: ${obj4['parent']['name']}`);

console.log('');

const objects = [obj3, obj4];

console.log(objects);
console.log(objects[0]);
console.log(`objects[0].name: ${objects[0].name}`);
console.log(`objects[0]['name']: ${objects[0]['name']}`);
