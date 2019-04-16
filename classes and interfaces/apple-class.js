function Apple(type) {
	this.type = type;
	this.color = 'red';
	this.getInfo = function() {
		return this.color + ' ' + this.type + ' apple';
	};

}


var apple = new Apple('macintosh');
apple.color = 'reddish';
console.log(apple.color);
console.log(apple.getInfo());


Apple.prototype.getBrand = function() {
	return 'Apple';
}
//function exist
console.log(apple.getBrand());
//function dont exist.
//console.log(apple.getUndeclaredFunction());

/***************** ANOTHER SAMPLE WITH CARS*/

function Vehicle(make, model, color) {
        this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function () {
            return this.make + " " + this.model;
        }
}

let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");

Vehicle.prototype.getModel = function() {
	return this.model;//corolla
}

console.log(car.getModel());

/****************************** class Car using word class *********/
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }

    static getColor(v) {
        return v.color;
    }
/*
    set color(newColor) {
    	this.color = newColor;
    }*/
}


let honda = new Car("Honda", "Accord", "Purple");

console.log('***** USING CLASS *********');
console.log('name: ' + honda.getName());
console.log('model: ' + honda.model);
console.log('color: '+ Car.getColor(honda)); // "purple"
honda.color = 'blue';
console.log('color: ' + honda.color);



// ES6 get and set
class User {

  constructor(name) {
    // invokes the setter
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      this._name = null;
    }
    this._name = value;
  }

}

let user = new User("John");
console.log(user.name); // John

user = new User(""); // Name too short.
console.log(user.name);


class Honda extends Car{
    getName(){
        return this.make + " " + this.model +" in child class.";
    }

    getAllDetails() {
    	return super.getName() + ' ' + this.color;
    }
}

let hondaCar = new Honda("Honda", "Accord", "Purple");

console.log('************* class Honda extends class Car ******* ');
console.log('Overwrited name : ' + hondaCar.getName()); // "Honda Accord in child class."
console.log('All details : ' + hondaCar.getAllDetails());