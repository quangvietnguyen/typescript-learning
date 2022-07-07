import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'newest viet', age: 33 });

user.on('save', () => {
  console.log(user);
});

user.save();
