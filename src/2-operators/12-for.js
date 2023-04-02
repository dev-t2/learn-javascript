for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('');

for (let i = 9; i > -1; i--) {
  if (i % 2 === 0) {
    continue;
  }

  if (i < 4) {
    break;
  }

  console.log(i);
}

console.log('');

const users = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

console.log('');

for (const user of users) {
  console.log(user.name);
}

const user = {
  id: 1,
  name: 'user',
  email: 'user@email.com',
};

console.log('');

for (const key in user) {
  console.log(`key: ${key}, value: ${user[key]}`);
}
