function isString(value: unknown): value is string {
  return typeof value === "string";
}

let value1: unknown = "Hello";

if (isString(value1)) {
  console.log(value1.toUpperCase());
}

export {};

// check the the type of value
// Array
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

let value2: unknown = [10, 20, 30];

if (isArray(value2)) {
  console.log(value2.length);
}

//object
function isObj(value: unknown): value is { name: string; age: number } {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

let value4: unknown = { name: "krishna", age: 11 };

if (isObj(value4)) {
  console.log(value4.name);
}

function checkAge(age: number): asserts age is number {
  if (age < 18) {
    throw new Error("age must be 18");
  }
}

let age = 20;
checkAge(age);
console.log("Age is valid");

type Direction = "NORTH" | "SOUTH" | "SOUTH" | "WEST";

function move(direction: Direction) {
  switch (direction) {
    case "NORTH":
      console.log("moving North");
      break;

    case "SOUTH":
      console.log("moving SOUTH");
      break;

    case "SOUTH":
      console.log("moving SOUTH");
      break;

    case "WEST":
      console.log("moving WEST");
      break;

    default:
      const check: never = direction;
  }
}

move("NORTH");
