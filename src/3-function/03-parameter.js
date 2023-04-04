const func1 = function (a, b = 0) {
  console.log(`func1(${a}, ${b})`);

  return `a + b: ${a + b}`;
};

console.log(func1(1, 2));
console.log(func1(4));

console.log('');

const user = { id: 1, name: 'User A' };

const func2 = function ({ name }) {
  return `user.name: ${name}`;
};

console.log(func2(user));

const func3 = function ({ email = 'user@email.com' }) {
  return `user.email: ${email}`;
};

console.log(func3(user));

console.log('');

const numbers = [1, 2, 3];

const func4 = function (numbers) {
  return `numbers[1]: ${numbers[1]}`;
};

console.log(func4(numbers));

const func5 = function ([_, b]) {
  return `b: ${b}`;
};

console.log(func5(numbers));

console.log('');

const func6 = function (...rest) {
  console.log(rest);

  return rest.reduce((result, value) => result + value, 0);
};

console.log(`func6(1, 2): ${func6(1, 2)}`);

console.log('');

console.log(`func6(1, 2, 3, 4, 5): ${func6(1, 2, 3, 4, 5)}`);
