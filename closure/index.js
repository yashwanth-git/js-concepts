// Simple Example
function x() {
  let name = "Yash";
  function y() {
    console.log(name); // name is not locally available for this function
  }
  y();
}

x();

// Complex Example
function x() {
  let a = 7;
  function y() {
    console.log(a);
  }
  return y; // it returns y here
}

var z = x(); // Even though this directly calls x here, the function remembers its lexical scope and returns 7
console.log(z);

z();
