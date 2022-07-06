import { User } from './models/User';

const user = new User({ name: 'viet', age: 29 });
// user.set({ name: 'new viet', age: 30 });
user.save();

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
