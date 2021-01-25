/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "Sadam",
  lastName: "Arbaa",
  age: 37,

  addresses: {
    batam: "batam center",
    sudan: "Khrtoum",
    uk: "london",
    getMainAddres: () => `My Main address  Is in Indonesia : Batam Center`,
  },

  // Methods
  getFullName: () => `full Name : ${user.firstName} ${user.lastName}`,

  // getAge: function () {
  //   return `Your Age is ${this.age}`;
  // },

  getAge: () => `Your Age is ${user.age}`,
};

// Accessing Object Properties

console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Braket Notation
console.log(typeof user.lastName); // string

console.log(user.addresses);
console.log(user.addresses.sudan);
console.log(user.addresses.batam);
console.log(user.addresses["uk"]);
console.log(user.addresses.getMainAddres());

// Accessing Object Methods

console.log(typeof user.getFullName); // function
console.log(user.getFullName());
console.log(user.getAge());
