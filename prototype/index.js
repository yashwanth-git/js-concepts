let object = {
  name: "Yashwanth",
  nation: "India",
  getIntro: function () {
    console.log(this.name + " from " + this.nation);
  },
};

let object2 = {
  name: "Gautham",
};

// Never do it
object2.__proto__ = object;

console.log(object2.getIntro());

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.call(args[0], params, ...args2); // Can also use apply here and pass all of them in array
  };
};

let head = {
  glasses: 1,
};

let table = {
  __proto__: head,
  pen: 3,
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2,
};

let pockets = {
  __proto__: bed,
  money: 2000,
};

console.log(pockets.glasses);

// Creates object without __proto__
// This kind of object do no possess inbuilt functions because proto holds all the in built functions
let obj = Object.create(null);
