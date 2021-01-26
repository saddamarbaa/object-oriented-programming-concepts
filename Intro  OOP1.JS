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

/*
  Constructor Function
*/

function Phone(serial, color, price, type) {
  this.serial = serial;
  this.color = `${color} *`;
  this.price = price - 20;
  this.type = type;
  // console.log(this);
  this.Info = () =>
    `Color :${this.color}\nprice :${this.price}\nSerial :${this.serial}\nType :${this.type}`;
}

let phone1 = new Phone(12, "blue", 212, "ipone");
console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);
console.log(phone1.type);
console.log(phone1.Info());

let phone2 = new Phone(112, "red", 324, "Sumsung");
console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);
console.log(phone2.type);

console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone1);
console.log(phone2.Info());

// const test = [1, 2, 3];

// // console.log(Phone.prototype);
// console.log(test.prototype);

// Phone.prototype.addTitle = function () {
//   return `${this.serial}`;
// };

// console.log(Phone.prototype);
// console.log(phone1.addTitle);

/*
  Class
*/

// Student Class
class Student {
  // Static Properties
  static counter = 0;
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
    Student.counter++;
  }

  studentInfo() {
    return `Name: ${this.name} \nAge: ${this.age}\nID :${this.id}`;
  }
  // accessor property(getter)
  get getName() {
    return this.name;
  }

  //accessor property(setter)
  set changeName(newName) {
    this.name = newName;
  }

  // Static Methods
  static studentCount() {
    return `${this.counter} Student in scholl`;
  }
}

let student1 = new Student("John", 1, 23);
let student2 = new Student("Ali", 11, 24);
let student3 = new Student("John", 12, 25);

console.log(student1.studentInfo());
console.log(student2.studentInfo());
console.log(student3.studentInfo());
console.log(typeof user);
console.log(Student.studentCount());

class HightSchoolStudent extends Student {
  constructor(name, id, age, gba) {
    super(name, id, age);
    this.gba = gba;
  }
  get getGBA() {
    `Your GBA IS ${this.gba}`;
  }
}

let hightst1 = new HightSchoolStudent("Sony", 21, 27, 88);
console.log(hightst1.studentInfo());
console.log(hightst1);
console.log(hightst1.getGBA);
console.log(hightst1);
console.log(hightst1.age);

// JavaScript Getter and Setter
console.log(student1.getName);
// change(set) object property using a setter
student1.changeName = "testing Name";
console.log(student1.name);

/*
  Object Meta Data
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/

const myTestObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myTestObject, "c", {
  writable: false,
  enumerable: false,
  configurable: true,
  value: 3,
});

Object.defineProperty(myTestObject, "c", {
  writable: true,
});

// console.log(delete  myTestObject.c); // Will Not Delete Because configurable is False
myTestObject.c = 500; // Will Not Change Because writable is False

console.log(myTestObject);

console.log("#".repeat(10));

for (let prop in myTestObject) {
  console.log(prop, myTestObject[prop]);
}

console.log("#".repeat(10));

console.log(Object.getOwnPropertyNames(myObject));
