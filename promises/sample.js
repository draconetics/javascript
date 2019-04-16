console.log("hellow world");
class Person {
	constructor(name, age, state){
		this.name = name;
		this.age = age;
		this.state = state;
	}
}

const person = new Person("Mario", 12, "married");
console.log(person.name);
person.name = 'new nombre';
console.log(person.name);

