const md5 = require('md5');

module.exports = (email) => {
  const hashedEmail = md5(email);

  return `https://www.gravatar.com/avatar/${hashedEmail}.jpg?d=identicon`;
};
