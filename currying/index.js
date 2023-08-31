let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiply(5)(2);

let multiplyByTwo = multiply(2);
multiplyByTwo(3)
