import { User } from './models/User';

const user = new User({name: 'Mapee', age: 20});

user.on('change', () => {
    console.log("changed clicked");
    
});

user.on('click', () => {
console.log("click clicked");

});

user.trigger('change');
