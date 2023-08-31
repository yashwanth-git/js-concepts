let name = {
  firstName: "Yashwanth",
  lastName: "Sridharan",
};

let printMyName = function (country, age, text, text2) {
  console.log(
    this.firstName,
    this.lastName + " from " + country + " and my age is",
    age,
    text,
    text2
  );
};

let printMeName = printMyName.bind(name, "India");

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.call(args[0], params, ...args2); // Can also use apply here and pass all of them in array
  };
};

let printMyBindName = printMyName.myBind(name, "India");
printMyBindName(26, "Why?", "Wasssup?");
