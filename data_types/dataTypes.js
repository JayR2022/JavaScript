// Create data types for the following:
// String, big number, float, boolean, object
// use console log to check the type for each
// 2 of the variables change the type of data type and check the new value


alert("Connected to dataTypes");

let stringData = "Jay";
let bigData = 111222333334445n;
let floatData = 23.456;
let booleanData = true;
let objectData = {
    make:"audi",
    model: "a3",
    diesel: true,
}

console.log(typeof stringData);
console.log(typeof bigData);
console.log(typeof floatData);
console.log(typeof booleanData);
console.log(typeof objectData);

console.log("====================");
stringData = 12;
floatData = "Rover"
console.log(typeof stringData);
console.log(typeof floatData);

// make an object that contains an array
console.log("====================");

let cuisines = ["Chinese", "Indian", "Thai", "Italian"];
let dieataryRequirements = {
    preferredCuisine: cuisines,
} 

console.log(cuisines);

// make an array that contains an object

let objectArray


