const object1 = new Object();
object1.name = 'User A';

console.log(object1);

console.log('');

function Object2() {
  this.name = 'User B';
}

const object2 = new Object2();

console.log(object2);

console.log('');

const object3 = { id: 1, name: 'User C', age: 100, age: 35 };

console.log(object3);
console.log(object3.name);
console.log(object3['name']);

const key = 'name';

console.log(object3[key]);

console.log('');

const object4 = { id: 1, name: 'User D', age: 33, parent: object3 };

console.log(object4);
console.log(object4.parent);

console.log('');

console.log(object4.parent.name);
console.log(object4.parent['name']);
console.log(object4['parent'].name);
console.log(object4['parent']['name']);

console.log('');

const objects = [object3, object4];

console.log(objects);
console.log(objects[0]);
console.log(objects[0].name);
console.log(objects[0]['name']);
