class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  set customName(name) {
    console.log('Setter');

    this.name = name;
  }

  get customName() {
    console.log('Getter');

    return this.name;
  }
}

const userA = new User('User A');

console.log(userA);
console.log(`getName: ${userA.getName()}`);

console.log('');

userA.customName = 'User B';

console.log(userA.customName);
