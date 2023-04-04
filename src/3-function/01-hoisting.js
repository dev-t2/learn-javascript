func1();

function func1() {
  console.log('func1');
}

func1();

console.log('');

// func2();

const func2 = function () {
  console.log('func2');
};

func2();

console.log('');

const func4 = function func3() {
  console.log('func3');
};

// func3();

func4();
