class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super();
  }
}

class C extends B {
  constructor() {
    super();
  }
}

const a = new A();

console.log(a instanceof A);
console.log(a instanceof B);
console.log(a instanceof C);

console.log('');

console.log(a.constructor === A);
console.log(a.constructor === B);
console.log(a.constructor === C);

console.log('');

const b = new B();

console.log(b instanceof A);
console.log(b instanceof B);
console.log(b instanceof C);

console.log('');

console.log(b.constructor === A);
console.log(b.constructor === B);
console.log(b.constructor === C);

console.log('');

const c = new C();

console.log(c instanceof A);
console.log(c instanceof B);
console.log(c instanceof C);

console.log('');

console.log(c.constructor === A);
console.log(c.constructor === B);
console.log(c.constructor === C);

console.log('');

const array = [1, 2, 3];

console.log(array instanceof Array);
console.log(array.constructor === Array);
