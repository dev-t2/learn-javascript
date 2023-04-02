const user1 = {
  name: 'User A',
};

console.log(user1.name);

console.log('');

const user2 = null;

console.log(user2?.name);

console.log('');

const getName = (user) => {
  return user?.name || 'Not Found';
};

console.log(getName(user1));
console.log(getName(user2));
