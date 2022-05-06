// With the object below write the destructuring assignment that reads:

// name property into the variable name.

// years property into the variable name age.

// isAdmin property into the variable isAdmin (false, if no such property)

let user = {
  name: "John",
  years: 30
  };


let {name, years: age, isAdmin=false} = user;

alert(name);
alert(age);
alert(isAdmin)

