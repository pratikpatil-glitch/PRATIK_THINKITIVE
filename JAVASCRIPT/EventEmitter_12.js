/* 
  EventEmitter
  - Purpose: To communicate between different parts of an application using events.
  - When to use: When one action should notify other parts of your application, such as user login, payment success, order placed, etc.

  - Important: Node.js provides a built-in EventEmitter through the events module.
  - It is not directly available as a global JavaScript feature in normal browser JavaScript.

  - on() = Listen
  - emit() = Trigger
  - once() = Listen only once
  - off() = Stop listening

*/

const EventEmitter = require("events");
const event = new EventEmitter();

//example: 1
event.on("product", (value) => {
  console.log(`delivered product is: ${value}`);
});
event.on("product", (value, email) => {
  console.log(`delivered Email to: ${email}`);
});

event.emit("product", "laptop", "krishna@gmail.com");

// example: 2
event.once("flipcart", (value) => {
  console.log(`delivered product is: ${value}`);
});
event.once("flipcart", (value, email) => {
  console.log(`delivered Email to: ${email}`);
});
event.emit("flipcart", "phone", "mohan@gmail.com");
event.emit("flipcart", "laptop", "mahadhav@gmail.com");


// OFF
function greet() {
  console.log("Hello!");
}

event.on("hello", greet);
event.off("hello", greet); // Removes listener
event.emit("hello");      // No output