const fetch = require('node-fetch');

async function getName( username ) {
	const url = `https://api.github.com/users/${username}`;
	const response = await fetch(url);
	const json = await response.json();
	
	console.log(json.name);
}

getName('rickitan');
