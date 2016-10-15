import { uniq } from 'lodash';
import { insane } from 'insane';
import { jsonp } from 'jsonp';
import { apiKey as key, baseUrl as url, sayHi, age} from './src/config';

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

console.log(`url: ${url} | api-key: ${key}`); 

sayHi("Andres");

console.log(`My age is ${age}`);
