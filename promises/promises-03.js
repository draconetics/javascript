/*
 * SAMPLE WITH ERROR BECAUSE IT IS A PROMISE
const fetch = require('node-fetch');

async function getName( username ) {
	const url = `https://api.github.com/users/${username}`;
	const response = await fetch(url);
	const json = await response.json();
	
	return json.name
}

const newName = getName('rickitan');
console.log(newName);
//output: Promise ( <pending> )
*/

const fetch = require('node-fetch');

async function getName( username ) {
	const url = `https://api.github.com/users/${username}`;
	const response = await fetch(url);
	const json = await response.json();
	
	return json.name
}

getName('draconetics')
	.then( (nombre) => console.log(nombre) );
