console.log("testing file");
//What is a callback?
//
//The parameter of the function 'click' is not a variable, then it is a function//When a function pass as a parameter to another function, it is called 'callback'

//$('#button_1').click(function() {
//	alert('button clicked !!');
//});

//looping an array
var zfighters = ['Goku','Vegeta','Picoro','Gohan'];

console.log('**************************');
console.log('Z-fighters');
zfighters.forEach(function(name, index){
	console.log(index + 1 + ' - ' + name);;
});


//Samples with 'typeof'
var index = 8;
  var result = (typeof index === 'number');
  console.log(result);
  // Output: true
var description = "w3resource";
  var result = (typeof description === 'string');
  console.log(result); 
  // Output: true




var allUsers = [];

function logStuff(data) {
	if(typeof data === 'string')
		console.log(data);

	if(typeof data === 'object') {
		for(var key in data) {
			console.log(key + ': ' + data[key]);
		}
	}
} 


//A function has 2 parameters and the second is a callback
//
function getInput(input, callback) {
	allUsers.push(input);

	(typeof callback === 'function') && callback(input);
}

getInput ( {user: 'mario', speciality: 'javascript'}, logStuff);


