// lets learn to declare the variables in javaScript

// when using let variable cannot be declared again in javaScript

let x = 20;

{
    let x= 10;
};

console.log(x);

// the answer of x is 20 as once we declare the variables with let variables we cannot declare the variables again..but now let see with var


var y = 20;

{
    var y= 10;
};

console.log(y);

// the answer of y is 10 as once we declare the variables with var variables we can declare again.. and the 2nd value will be taken into considration

//  consts are used to declare the variables which will not be changed, ones declared that will be forever declared.

const PI = 3.141592653589793;