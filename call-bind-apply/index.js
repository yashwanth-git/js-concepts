let name = {
  firstName: "Yashwanth",
  lastName: "Sridharan",
  printName: function () {
    console.log(this.firstName, this.lastName);
  },
};

name.printName();

let name2 = {
  firstName: "Gautham",
  lastName: "Sridharan",
};

// name.printName.call(name2); // we are borrowing the function from different object

// Make things better

let name1 = {
  firstName: "Yashwanth",
  lastName: "Sridharan",
};

let printName = function (nationality, age) {
  console.log(
    "I'm " + this.firstName,
    this.lastName + " from " + nationality + " and my age is " + age
  );
};

printName.call(name1, "India", 26);
printName.apply(name2, ["USA", 32]);

// bind
let printMyName = printName.bind(name2, "USA", 32); // Bind the method to an object and create a copy
printMyName();
