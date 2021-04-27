// Function Basics 
// Can have default value , and type for parameters and return value 
function add(a:number = 0, b:number): number{
    return  a + b;
    
}
const result = add(1,2)
console.log(result);

// Rest params 
function listNumbers(...nums : number[])
{
    console.log(nums);
    
}
listNumbers(1,2,3,4)
