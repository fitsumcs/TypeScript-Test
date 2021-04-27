// Data types in typescript [bool, int , string]

// String 
let message:String = "Hello World";
console.log(message);

// Boolean 
let message2:boolean = true;
console.log(message2);

// Int
let message3:number = 12;
console.log(message3);

// Array 
let list: number[] = [1, 2, 3];
console.log(list);

// Enum
enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

  console.log(c);

//   Not Sure 
  let notSure: unknown = 4;
  console.log(notSure);

//   Any 
let looselyTyped: any = 4;
console.log(looselyTyped);

// Void
let unusable: void = undefined;
console.log(unusable);

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
console.log(u,n);



  
  
