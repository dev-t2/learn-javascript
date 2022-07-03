const obj1 = { a: 1, b: 2, c: 3 };

console.log(obj1);

const obj2 = { a: 'a', b: 'b', c: 'c' };

console.log(obj2);

const obj3 = {
  a: 1,
  b: 'a',
  c: true,
  d: undefined,
  e: null,
  f: [1, 2, 3],
};

console.log(obj3);

const obj4 = {
  a: { a1: 1, a2: 2, a3: 3 },
  b: { b1: 4, b2: 5, b3: 6 },
  c: { c1: 7, c2: 8, c3: 9 },
};

console.log(obj4);
console.log(obj4.a);
console.log(obj4.b.b2);
