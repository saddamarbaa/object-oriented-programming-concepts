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

// Dot Notation vs Bracket Notation

let myObj = {
  One: 1,
  "Two!": 2,
};

console.log(myObj.One);
// console.log(myObj."One"); // Syntax Error
// console.log(myObj.Two!); // Syntax Error

console.log(myObj["One"]); // 1
console.log(myObj["Two!"]); // 2

let myObj2 = {
  1: "One",
  2: "Two",
};

// console.log(myObj2.1); // Syntax Error

console.log(myObj2["1"]);
console.log(myObj2["2"]);

let myVariable = "name";

let myLastObj = {
  name: "saddam",
};

console.log(myLastObj.myVariable); // Undefined
console.log(myLastObj[myVariable]); //saddam
console.log(myLastObj["name"]); // saddam

/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
*/

let teacher = new Object();
teacher.firstName = "Adam";
teacher.age = 12;
teacher.lastName = "Ali";
console.log(teacher);
console.log(teacher.age);
console.log(teacher.firstName);
console.log(teacher.lastName);
