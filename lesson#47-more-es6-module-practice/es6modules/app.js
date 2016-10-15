import User, {createUrl, gravatar} from './src/user';

const user = new User('Andres Zapata', 'andreszapatacano@gmail.com', 'www.azapata.com');

console.log(user);

const userProfile = createUrl(user.name);

const userGravatar = gravatar(user.email);

console.log(userProfile, userGravatar);