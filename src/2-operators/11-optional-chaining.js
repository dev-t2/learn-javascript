const user1 = {
  name: 'dev-t2',
};

console.log(user1.name);

const user2 = null;

console.log(user2?.name);

const getName = (user) => {
  return user?.name || 'Not Found';
};

console.log(getName(user1));
console.log(getName(user2));
