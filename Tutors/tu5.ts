// Generic Class
class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  
  let greeter = new Greeter("Greeter");
  console.log(greeter.greet())


//   Inheritance 
class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();


//   Public, private, and protected modifiers
class Modifiers {
    
    // Private
    private name: string;
    // #name2: string;
    
    // Public 
    public name3: string;

    // protected 
    protected name4: string;

    // Read only 
    readonly name5: string;

    // static 
    static origin = { x: 0, y: 0 };


  }
//   error 
//   new Modifiers().name;
//   new Modifiers().name4;
//   new Modifiers().name5 = "Hi There";

//   access static 
console.log(Modifiers.origin);




//   abstract class
abstract class Animal2 {
    abstract makeSound(): void;
  
    move(): void {
      console.log("roaming the earth...");
    }
  }