/*
  1. Function Declaration: A standard named function that is hoisted so you can call it before or after its definition.
  
  2. Anonymous Function: An anonymous function is a function without a name.
  
  3. Function Expression: A function expression means creating a function and assigning it to a variable. 
  
  4. Arrow Function: An arrow function is a shorter way to write a function. It uses the => symbol.
  
  5. Immediately Invoked Function Expression (IIFE): An IIFE is a function that executes immediately after it is created.
  
  6. Callback Function: A callback is a function passed as an argument to another function. (such as inside .map(), .filter(), or setTimeout()).
  
  7. Higher-Order Function: A higher-order function is a function that:
        - Takes another function as an argument, or
        - Returns another function.

  8. Constructor Function: A constructor function is a normal function used with {new} to create objects.
 
  9. Recursive Function: A recursive function is a function that calls itself.
 
  10. Generator Function: A generator function can pause and continue its execution.
            - yield = stop and give value
            - next() =  execute next steps.
            - return = complete function.

  11. Async Function: An async function is used to work with asynchronous operations. It is declared using the async keyword. An async function always returns a Promise.
 
  12. Getter & Setter: A getter is a special function that lets you access a property like a normal property. A setter is a special function that runs when you assign a value to a property.
 
  13. The arguments Object : Traditional functions have an arguments object.
 
  14. Function Currying: Currying means converting a function that takes multiple arguments into a sequence of functions that each take one argument.
 
  15. Function Composition: Function composition means combining functions so that the output of one becomes the input of another.

*/

console.log("\n===== FUNCTION DECLARATION =====");
function greet(name = "mohan") {
  console.log(`hello, ${name}`);
}
greet();
greet("Krishna");

console.log("\n===== Anonymous FUNCTION =====");
console.log("\n===== Function Expression =====");
let add = function (a, b) {
  console.log(`addition ${a + b}`);
};
add(10, 20);

console.log("\n===== Arrow FUNCTION =====");
let add1 = (a, b) => {
  return a + b;
};
console.log(add1(10, 200));

console.log("\n===== IIFE FUNCTION =====");
(function (name) {
  console.log(`name: ${name}`);
})("Krishna");

console.log("\n===== CALLBACK FUNCTION =====");
function operation(a, b, greet) {
  console.log(`Multiplication: ${a * b}`);
  greet(a * b);
}

function greet(value) {
  console.log(value + 10);
}
operation(2, 4, greet);

setTimeout(() => {
  console.log("set Timeout");
}, 1000);

console.log("\n===== Higher-Order FUNCTION =====");
function outer() {
  return function () {
    console.log("Inner function");
  };
}
const result = outer();
result();

console.log("\n===== Constructor FUNCTION =====");
function Student(name, age) {
  this.name = name;
  this.age = age;
}
let stud1 = new Student("krishna", 11);
console.log(`stud1: ${stud1.name}`);

console.log("\n===== Generator FUNCTION =====");
function* genrateId() {
  let id = 101;

  while (id <= 103) {
    yield id;
    id++;
  }
}

let Id = genrateId();

console.log(Id.next().value);
console.log(Id.next().value);
console.log(Id.next().value);
console.log(Id.next().value);

console.log("\n===== Async FUNCTION =====");
async function hello() {
  return "hello";
}
hello().then((result) => {
  console.log(`result: ${result}`);
});

console.log("\n===== GETTER & SETTER FUNCTION =====");
const studentName = {
  name: "",

  set setName(value) {
    this.name = value;
  },

  get getName() {
    return this.name;
  },
};

studentName.setName = "krishna";
console.log(studentName.getName);

console.log("\n===== The arguments Object =====");
function add4() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

add4(10, 20);

console.log("\n===== Function Currying =====");
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(10)(20));

console.log("\n===== Function Composition =====");
function cal(a, b) {
  return a + b;
}
function multi(value) {
  return value * 10;
}
console.log(multi(cal(10, 2)));
