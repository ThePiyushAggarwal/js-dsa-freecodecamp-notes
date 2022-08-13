//Some methods:
//  - instanceof
//  - hasOwnProperty
//  - isPrototypeOf

// - Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype); // yields true

// - Inherit Behaviors from a Supertype
let animal = new Animal();
// There are some disadvantages when using this syntax for inheritance.
// Alternative
let animal = Object.create(Animal.prototype);

// Reset an Inherited Constructor Property
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Add methods after inheritance

// Override Inherited Methods
// It's possible to override an inherited method.
// It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override.
