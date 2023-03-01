function function1() {
  console.log('Function 1');
}

console.log(function1);

function1();

function function2() {
  return 123;
}

console.log(function2);
console.log(typeof function2);
console.log(function2());
console.log(typeof function2());

const function3 = function () {
  return 456;
};

console.log(function3);
console.log(typeof function3);
console.log(function3());
console.log(typeof function3());

const function4 = function () {
  console.log('Function 4');
};

const function5 = function (a) {
  console.log(a);

  a();
};

function5(function4);
