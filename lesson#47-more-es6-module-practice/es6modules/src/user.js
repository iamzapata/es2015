import slug from 'slug';
import {baseUrl as url} from './config';
import base64 from 'base-64';

export default function User(name, email, website) {
	return { name, email, website }
}

function createUrl(name) {
	return `${url}/users/${slug(name)}`;
}

function gravatar(email) {
	const hash = base64.encode(email);
	const photoUrl = `https://www.gravatar.com/avatar/${hash}`;

	return photoUrl;
}

export { createUrl, gravatar};