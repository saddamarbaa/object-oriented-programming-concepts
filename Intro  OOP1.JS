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

// For In Loop With Object Properties

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

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

// Defining Object With Object.assign()

const src1 = {
  prop1: "Value1",
  prop2: "Value2",
  method1: function () {
    return `Method 1`;
  },
};

const src2 = {
  prop3: "Value3",
  prop4: "Value4",
  method2: function () {
    return `Method 2`;
  },
};

const target = {
  prop5: "Value5",
};

Object.assign(target, src1, src2, { prop6: "Value6" });

console.log(target);

const myObject = Object.assign({}, target, { prop7: "Value7" });

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop6);
console.log(myObject.method1());
console.log(myObject.method2());
