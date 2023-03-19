class User {
  constructor(name) {
    this.name = name;
  }

  static isUser(user) {
    console.log('Static Method');

    return !!user.name;
  }

  getName() {
    return this.name;
  }
}

const userA = new User('User A');

console.log(userA);
console.log(userA.getName());

console.log('');

const userB = { id: 2 };

console.log(User.isUser(userA));
// console.log(userA.isUser());
// console.log(User.getName());
console.log(User.isUser(userB));
