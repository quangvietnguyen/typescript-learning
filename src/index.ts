import { User } from './models/User';

const user = new User({ name: 'viet', age: 29 });

console.log(user.get('name'));
