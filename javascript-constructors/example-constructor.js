function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var something = new ExampleConstructor();
console.log(something);
var expression = something instanceof ExampleConstructor;
console.log(expression);
