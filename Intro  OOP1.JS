/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "Sadam",
  lastName: "Arbaa",

  // Methods
  getFullName: function () {
    return `full Name : ${user.firstName} ${user.lastName}`;
  },
};

// Accessing Object Properties

console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Braket Notation
console.log(typeof user.lastName); // string

// Accessing Object Methods

console.log(typeof user.getFullName); // function
console.log(user.getFullName());
