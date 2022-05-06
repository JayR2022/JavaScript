// Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.

// e.g.

// n1=2, n2=3 will return 8 (2 x 2 x 2);

// n1=3, n2=3 will return 27 (3 x 3 x 3);

"use strict"

alert("Functions")

let powerUp = (n1,n2) => Math.pow(n1,n2);


let v1 = 2;
let v2 = 3;

console.log(`Result of: base value ${v1} and exponent value ${v2} is ${powerUp(v1,v2)}`);

v1 = 3;
v2 = 3;
console.log(`Result of: base value ${v1} and exponent value ${v2} is ${powerUp(v1,v2)}`);