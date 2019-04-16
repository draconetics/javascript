
const fetch = require('node-fetch');

async function getName( username ) {
	const url = `https://api.github.com/users/${username}`;
	const response = await fetch(url);
	const json = await response.json();

	if(json.message === "Not Found") 
		throw Error('User does not exist');
	
	return json.name
}

getName('draconetics')
	.then( (nombre) => console.log(nombre) )
	.catch((e) => console.log(`Error: ${e}`));

//output: Error: Error: User does not exist
