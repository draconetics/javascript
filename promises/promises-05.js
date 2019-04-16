
const fetch = require('node-fetch');

async function getName( username ) {
	const url = `https://api.github.com/users/${username}`;
	const response = await fetch(url);
	const json = await response.json();

	if(json.status !== 200) 
		throw Error('User does not exist');
	
	return json.name
}

(async function() {
	try {
		const name = await getName('idontexist');
		console.log(name);
	}catch(e){
		console.log(`Error: ${e}`);
	}

})()

getName('rickitan')
	.then( (nombre) => console.log(nombre) )
	.catch((e) => console.log(`Error: ${e}`));

//output: Error: Error: User does not exist
