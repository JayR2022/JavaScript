// create an array of fruits (7), destructure them into 4 elements and one of them containing the rest

"use strict"

alert("Arrays");

let fruitsArray = ["apple", "orange", "banana", "kiwi", "mango", "passion-fruit", "pear"];

let [f1,f2,f3,f4,...rest] = fruitsArray;

console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(rest);