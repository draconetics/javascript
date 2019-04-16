const fetch = require('node-fetch');

function getName(username) {
	const url = `http://api.github.com/users/${username}`;
	fetch(url)
	.then(respuesta => respuesta.json())
	.then(json => {
		console.log(json.name);
	})

}

getName('rickitan');



