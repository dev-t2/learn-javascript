const func1 = function () {
  return 'func1';

  console.log('return');
};

console.log(func1);
console.log(func1());

console.log('');

const func2 = function () {
  return;
};

console.log(func2());

const func3 = function () {};

console.log(func3());

console.log('');

const func4 = function (num) {
  if (typeof num !== 'number') {
    console.log({ num });

    return 0;
  }

  return num + 1;
};

console.log(func4(4));
console.log(func4());
