// Create a callback function that asks for a user to enter a value, then increase that value by 10 through another function.


" use strict"

alert("Callbacks");

let increaseValueBy10 = (input_value) => console.log(input_value+10);

const processUserInput = (callback) =>  {

    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let value = parseInt(prompt('Please enter a numeric value.'));
  
    // Then pass the variable `name` to the callback function as parameter
    callback(value);
  }


processUserInput(increaseValueBy10);