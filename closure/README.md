# Closure

Function along with its lexical scope binded together is closure. So in the [1] function written `function y()` does not have a name variable to itself, so while the code is running it looks up to its lexical scope [basically the parents] until it finds it, if not found throws error

[2] The `function x()` returns `function y()` which makes it complex to think thorough, but how it actually works is the function remembers its lexical scope and still logs the value
