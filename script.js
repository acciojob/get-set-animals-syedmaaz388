//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log("The " + this.species + " make a sound.");
	}
}

class Dog extends Animal {
	purr(){
		console.log("The " + this.species + "purrs.")
	}
}

class Cat extends Animal {
	bark(){
		console.log("The " + this.species + " barks.");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
