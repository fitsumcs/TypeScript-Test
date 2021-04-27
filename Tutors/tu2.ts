// Operators 

// Arithmetic 
let a = 2 ; 
let b = 3;
let value = a + b;
console.log(value);
console.log(value++);

// Relational Op 
console.log(a > b);
console.log(a <= b);

// Logical 
console.log(a <b && b > a);



// Conditional 
if(a > b)
{
    console.log("Ummm");
    
}
else if(a <b )
{
    console.log("Kkk");
    
}
else{
    console.log("Ddd");
    
}

// switch
let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}



// Loops [For]

for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }


//   for...of Loop
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

// for...in Loop
for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}