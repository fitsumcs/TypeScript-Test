// generics 
function getGeneric<T>(arg:T):T{
    return arg;
}

console.log(getGeneric<string>("Hi There"));

console.log(getGeneric<boolean>(true));

console.log(getGeneric<{id:number, name:string}>({id : 1, name :"Jhone"}));

