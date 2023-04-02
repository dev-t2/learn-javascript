function func1() {
  console.log('func1');
}

console.log(func1);

func1();

console.log('');

function func2() {
  return 123;
}

console.log(func2);
console.log(`typeof func2: ${typeof func2}`);
console.log(func2());
console.log(`typeof func2(): ${typeof func2()}`);

console.log('');

const func3 = function () {
  return 456;
};

console.log(func3);
console.log(`typeof func3: ${typeof func3}`);

console.log('');

const func4 = function () {
  console.log('func4');
};

const func5 = (callback) => {
  console.log(callback);

  callback();
};

func5(func4);
