/*

An Assertion Function is used to check whether something is correct. If not, it throws an error and stops execution.
Where we use it: When we want to make sure a value meets a condition before using it.
 
*/

// 1. Check Age

function checkAge(age: number): asserts age is number {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
}

let age = 20;
checkAge(age);
console.log("Age is valid");

// 2. Check String

function checkString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Value must be a string");
  }
}

let name: unknown = "Pratik";
checkString(name);
console.log(name.toUpperCase());

// 3. Check Number

function checkNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Value must be a number");
  }
}

let marks: unknown = 90;
checkNumber(marks);
console.log(marks + 10);

// 4. Check Array

function checkArray(value: unknown): asserts value is any[] {
  if (!Array.isArray(value)) {
    throw new Error("Value must be an array");
  }
}

let fruits: unknown = ["Apple", "Mango"];
checkArray(fruits);
console.log(fruits.length);

// 5. Check Object

function checkObject(value: unknown): asserts value is object {
  if (typeof value !== "object" || value === null) {
    throw new Error("Value must be an object");
  }
}

let user: unknown = { name: "Pratik" };
checkObject(user);
console.log(user);

// 6. Check Email

function checkEmail(email: string): asserts email is string {
  if (!email.includes("@")) {
    throw new Error("Invalid email address");
  }
}

let email = "pratik@gmail.com";
checkEmail(email);
console.log("Email is valid");

// 7. Check Positive Number

function checkPositive(num: number): asserts num is number {
  if (num <= 0) {
    throw new Error("Number must be positive");
  }
}

let price = 500;
checkPositive(price);
console.log("Valid price:", price);

// 8. Check User Object

type User = {
  name: string;
  age: number;
};

function checkUser(user: unknown): asserts user is User {
  if (
    typeof user !== "object" ||
    user === null ||
    !("name" in user) ||
    !("age" in user) ||
    typeof user.name !== "string" ||
    typeof user.age !== "number"
  ) {
    throw new Error("Invalid user object");
  }
}

let userData: unknown = {
  name: "Pratik",
  age: 25,
};

checkUser(userData);
console.log(userData.name, userData.age);

// 9. Check Not Null or Undefined

function checkNotNull<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  }
}

let userName: string | null = "Pratik";

checkNotNull(userName);
console.log(userName.toUpperCase());

// 10. Check Admin Role

type Admin = {
  name: string;
  role: "admin";
};

function checkAdmin(user: unknown): asserts user is Admin {
  if (
    typeof user !== "object" ||
    user === null ||
    !("name" in user) ||
    !("role" in user) ||
    user.role !== "admin" ||
    typeof user.name !== "string"
  ) {
    throw new Error("User is not an admin");
  }
}

let currentUser: unknown = {
  name: "Pratik",
  role: "admin",
};

checkAdmin(currentUser);
console.log("Welcome Admin:", currentUser.name);

export {};
