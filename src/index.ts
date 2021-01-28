import { User } from './models/User';

const user = new User({id: 1});
const userTwo = new User({ name: 'new record', age: 12})

user.set({name: 'NEW NAME SURNAME', age: 25});

user.save();
userTwo.save();

