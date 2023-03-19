const [a, b, c] = [1, 2, 3];

console.log({ a, b, c });

const [_, d, ...restArr] = [4, 5, 6, 7];

console.log({ d, restArr });

const { e, f: num, g = 3, ...restObj } = { e: 1, f: 2, h: 4, i: 5 };

console.log({ e, num, g, restObj });
