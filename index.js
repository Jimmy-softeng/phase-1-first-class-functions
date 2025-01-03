const { returns } = require("chai-spies");

//callback function
function sayHello(){
    console.log("Hello");
}
function receivesAFunction(callback){
 callback();
}
receivesAFunction(sayHello);

//returns a namedfunction
function returnsANamedFunction(){
    return function innerFunction(){
        console.log("this is a named function");
    };
}
const myfunction=returnsANamedFunction();
myfunction();
//anonymous function
function returnsAnAnonymousFunction(){
    return function(){
      console.log("this anonymous function");
    };
}
const anonymousFunction=returnsANamedFunction();
anonymousFunction();