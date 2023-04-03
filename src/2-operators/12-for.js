for (let i = 0; i < 10; i++) {
  console.log(`i: ${i}`);
}

console.log('');

for (let i = 9; i > -1; i--) {
  if (i % 2 === 0) {
    continue;
  }

  if (i < 4) {
    break;
  }

  console.log(`i: ${i}`);
}

console.log('');

const users = [
  { id: 1, name: 'User A' },
  { id: 2, name: 'User B' },
  { id: 3, name: 'User C' },
];

for (let i = 0; i < users.length; i++) {
  console.log(`users[${i}].name: ${users[i].name}`);
}

console.log('');

for (const user of users) {
  console.log(`user.name: ${user.name}`);
}

console.log('');

const user = { id: 1, name: 'User A', email: 'user@email.com' };

for (const key in user) {
  console.log(`key: ${key}, value: ${user[key]}`);
}
