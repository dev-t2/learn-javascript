const a = [1, 2, 3];

console.log(a);
console.log(...a);

const b = [4, 5, 6];

console.log(a.concat(b));
console.log([...a, ...b]);

const c = { x: 1, y: 2 };
const d = { y: 3, z: 4 };

console.log(Object.assign({}, c, d));
console.log({ ...c, ...d });

const fn = (a, b, c) => {
  console.log(a, b, c);
};

fn(1, 2, 3);

const e = [1, 2, 3];

fn(e[0], e[1], e[2]);
fn(...e);
