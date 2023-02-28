const object1 = new Object();
object1.name = 'dev-t2';

console.log({ object1 });

function Object2() {
  this.name = 'dev-t2';
}

const object2 = new Object2();

console.log({ object2 });

const object3 = {
  name: 'dev-t2',
  age: 100,
  age: 35,
};

console.log({ object3 });
console.log(object3.name);
console.log(object3['name']);

const key = 'name';

console.log(object3[key]);

const object4 = {
  name: 'austin',
  age: 33,
  parent: object3,
};

console.log({ object4 });
console.log(object4.parent);
console.log(object4.parent.name);
console.log(object4.parent['name']);
console.log(object4['parent'].name);
console.log(object4['parent']['name']);

const objects = [object3, object4];

console.log({ objects });
console.log(objects[0]);
console.log(objects[0].name);
console.log(objects[0]['name']);
