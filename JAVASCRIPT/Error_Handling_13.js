/* 
 Error Handling:
    - Error Handling is a technique used to detect and manage errors in a program without allowing unexpected failures to crash the entire application.

    - Types of Errors in JavaScript: Built-in Error Types
        - SyntaxError : When code has invalid JavaScript syntax
        - ReferenceError : When accessing an undeclared variable
        - TypeError : When an operation is performed on an incompatible value
        - RangeError : When a value is outside its allowed range
        - URIError : When URI handling functions receive invalid URI data
        - EvalError : Historical error type associated with eval(); rarely encountered

    - try Block: To execute code that may fail and allow its error to be caught.
    - catch Block: To catch and handle errors.
    - finally Block: The finally block executes after try and catch, whether an error occurs or not. 
        Purpose: To execute cleanup code, such as closing resources or resetting loading indicators.

    - throw Keyword: The throw keyword is used to create and throw your own error.
            throw new Error("Error message");
    
    - Error Object: JavaScript provides an Error object to represent errors.
        - Property	Purpose
            name	Returns the error name
            message	Returns the error message
            stack	Provides stack trace information


    - Custom Errors
        - A Custom Error is an error created by developers for application-specific situations.
    
    - Error propagation in JavaScript Promises means an error automatically travels through the Promise chain until it reaches a .catch() handler.

*/

const { rejects } = require("node:assert");
const { constants } = require("node:buffer");
const { error } = require("node:console");
const { resolve } = require("node:dns");

console.log("\n===== Built in Errors =====");

try {
  let age = 15;

  if (age <= 18) {
    throw new Error("You are not elible to vote");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  // console.log(error.stack);
}

console.log("\n===== Custom Errors =====");

class VoterError extends Error {
  constructor(message) {
    super(message);
    this.name = "voterError";
  }
}

try {
  let age = 15;

  if (age <= 18) {
    throw new VoterError("custom: You are not elible to vote");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  // console.log(error.stack);
}

console.log("\n===== Error Handling in Async/Await =====");
async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!res.ok) {
      throw new Error("data not getting");
    }
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.name, error.message);
  }
}
getData();

console.log("\n===== Error Handling in Promises =====");
function getUser() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          reject("failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message);
      });

    console.log(resolve.data);
    console.log(rejects.data);
  });
}

getUser()
  .then((user) => {
    console.log("User Id: ", user.userId);
    console.log("User Title: ", user.title);
  })
  .catch((error) => {
    console.log(("error: ", error));
  });
