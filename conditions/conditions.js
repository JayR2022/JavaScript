"use strict"

alert("Conditions");

let strictA = true;
let strictB = 1;
console.log("====================");
console.log("Exercise 1")
console.log("====================");

console.log(strictA == strictB);
console.log(strictA === strictB);

console.log("====================");
console.log("Exercise 2")
console.log("====================");

console.log(strictA != strictB);
console.log(strictA !== strictB);

console.log("====================");
console.log("Exercise 3")
console.log("====================");

let age = 100;
let upperAgeThreshold = 65;
let lowerAgeThreshold = 18;

console.log(`Age: ${age}`);

if (age<lowerAgeThreshold){
    console.log("Underage");
}

else if (age>upperAgeThreshold){
    console.log("Overage");
}
else{
    console.log(`JavaScript says Within age group ${lowerAgeThreshold} - ${upperAgeThreshold}`);
}

console.log("====================");
console.log("Exercise 4")
console.log("====================");

const age_threshold = 50;
console.log(`Age: ${age}`);
console.log(age>age_threshold?"Age above 50":"Age below 50");

