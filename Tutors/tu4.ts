// Interface 
interface Person {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    greeting(message:string):string;
}
const customer: Person =  {
 
    firstName: 'Jhone',
    lastName: 'Doe',
    email: "jhonedo@gmail.com",
    age: 32,
    greeting: (msg:string)=>{return msg}

}

console.log(customer);
console.log(customer.greeting("Hi"));