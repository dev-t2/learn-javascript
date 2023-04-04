function func() {
  this.name = 'User A';

  return {
    id: 1,
    name: 'User B',
    getName1: function () {
      return `getName1: ${this.name}`;
    },
    getName2() {
      return `getName2: ${this.name}`;
    },
    getName3: () => {
      return `getName3: ${this.name}`;
    },
  };
}

console.log(func().getName1());
console.log(func().getName2());
console.log(func().getName3());

console.log('');

const user = {
  id: 2,
  name: 'User C',
};

console.log(func().getName1.call(user));
console.log(func().getName2.call(user));
console.log(func().getName3.call(user));

console.log('');

const timer = {
  title: 'Timer',
  timeout() {
    console.log(`this.title: ${this.title}`);

    setTimeout(function () {
      console.log(`Function => this.title: ${this.title}`);
    }, 1000);

    setTimeout(() => {
      console.log(`Arrow Function => this.title: ${this.title}`);
    }, 1000);
  },
};

timer.timeout();
