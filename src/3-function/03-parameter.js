const func1 = function (a, b = 0) {
  return a + b;
};

console.log(func1(1, 2));
console.log(func1(4));

console.log('');

const user = {
  id: 1,
  name: 'User Name',
};

const func2 = function ({ name }) {
  return name;
};

console.log(func2(user));

const func3 = function ({ email = 'default@email.com' }) {
  return email;
};

console.log(func3(user));

console.log('');

const numbers = [1, 2, 3];

const func4 = function (numbers) {
  return numbers[1];
};

console.log(func4(numbers));

console.log('');

const func5 = function ([_, b]) {
  return b;
};

console.log(func5(numbers));

console.log('');

const func6 = function (...rest) {
  console.log({ rest, arguments });

  return rest.reduce((result, value) => result + value, 0);
};

console.log(func6(1, 2));
console.log(func6(1, 2, 3, 4, 5));
console.log(func6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
