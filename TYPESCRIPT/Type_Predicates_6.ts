/*
A Type Predicate is used to check the type of a value and tell TypeScript what type it is.
  Where we use it: When we want to make sure a value is of a particular type before using it.
*/


// 1. Check String


function isString(value: unknown): value is string {
  return typeof value === "string";
}

let value1: unknown = "Hello";

if (isString(value1)) {
  console.log(value1.toUpperCase());
}


// 2. Check Number


function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

let value2: unknown = 100;

if (isNumber(value2)) {
  console.log(value2.toFixed(2));
}


// 3. Check Boolean


function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

let value3: unknown = true;

if (isBoolean(value3)) {
  console.log(value3);
}


// 4. Check Array


function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

let value4: unknown = [10, 20, 30];

if (isArray(value4)) {
  console.log(value4.length);
}


// 5. Check Null


function isNull(value: unknown): value is null {
  return value === null;
}

let value5: unknown = null;

if (isNull(value5)) {
  console.log("Value is null");
}


// 6. Check Object


function isPerson(value: unknown): value is { name: string; age: number } {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

let value6: unknown = { name: "Rahul", age: 25 };

if (isPerson(value6)) {
  console.log(value6.name);
  console.log(value6.age);
}


// 7. Check Even Number


function isEven(value: unknown): value is number {
  return typeof value === "number" && value % 2 === 0;
}

let value7: unknown = 10;

if (isEven(value7)) {
  console.log("Even number:", value7);
}


// 8. Check Admin User


type Admin = {
  name: string;
  role: "admin";
};

function isAdmin(user: unknown): user is Admin {
  return (
    typeof user === "object" &&
    user !== null &&
    "name" in user &&
    "role" in user &&
    typeof user.name === "string" &&
    user.role === "admin"
  );
}

let value8: unknown = { name: "Pratik", role: "admin" };

if (isAdmin(value8)) {
  console.log("Admin:", value8.name);
}


// 9. Check Email


function isEmail(value: unknown): value is string {
  return (
    typeof value === "string" && value.includes("@") && value.includes(".")
  );
}

let value9: unknown = "test@gmail.com";

if (isEmail(value9)) {
  console.log("Valid email:", value9);
}


// 10. Check Product


type Product = {
  id: number;
  name: string;
  price: number;
};

function isProduct(value: unknown): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "price" in value &&
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.price === "number"
  );
}

let value10: unknown = {
  id: 1,
  name: "Laptop",
  price: 50000,
};

if (isProduct(value10)) {
  console.log(value10.name);
  console.log(value10.price);
}

export {};
