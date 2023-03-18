const func1 = function (a, b) {
  return a + b;
};

console.log(func1(1, 2));

const func2 = (a, b) => {
  return a + b;
};

console.log(func2(1, 2));

const func3 = (a, b) => a + b;

console.log(func3(1, 2));

const a = () => {};

const b = (x, y) => {
  return x * y;
};

const c = (x, y) => x * y;

const d = (x, y) => {
  console.log({ x, y });

  return x * y;
};

const e = () => {
  return { a: 1 };
};

const f = () => ({ a: 1 });

const g = () => {
  return [1, 2, 3];
};

const h = () => [1, 2, 3];
