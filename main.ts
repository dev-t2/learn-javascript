import _ from 'lodash';

console.log(_.upperCase('hello world'));

interface IUser {
  name: string;
}

const user: IUser = {
  name: 'dev-t2',
};

console.log(user);
