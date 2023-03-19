class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const userA = new User('User A');

console.log(userA);
console.log(userA.getName());
