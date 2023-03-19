let i = 0;

const func1 = () => {
  console.log('func1');

  i += 1;

  if (i < 4) {
    func1();
  }
};

func1();

console.log('');

const userA = { name: 'userA', parent: null };
const userB = { name: 'userB', parent: userA };
const userC = { name: 'userC', parent: userB };
const userD = { name: 'userD', parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }

  return user;
};

console.log(getRootUser(userA));
console.log(getRootUser(userB));
console.log(getRootUser(userC));
console.log(getRootUser(userD));
