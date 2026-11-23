let age = 10;
let allowed = true;

// if else
console.log("\n===== IF-ELSE =====");

if (age >= 18) {
  if (allowed) {
    console.log("you are allowed for UPSC");
  } else {
    console.log("you are not allowed for UPSC");
  }
}

// switch

function isAvailable(day) {
  switch (day) {
    case 1:
      console.log("MON");
      break;
    case 2:
      console.log("TUE");
      break;
    case 3:
      console.log("WED");
      break;
    default:
      console.log("Invalid Day :)");
  }
}

isAvailable(3);
isAvailable(4);

console.log("\n===== Fall-through in switch =====");

function check(day) {
  switch (day) {
    case "saturday":
    case "sunday":
      console.log("weekend");
      break;

    case "monday":
      console.log("monday");
      break;
    default:
      console.log("Invalid Day :)");
  }
}
let day = "saturday";
check(day);

console.log("\n===== TERNARY OPERATOR =====");
let a = 28;
let vote = a >= 18 ? "allowed" : "not allowed";
console.log(vote);

console.log("\n===== Short-Circuit AND (&&)  Alternative IF=====");
let isLogin = true;
isLogin && console.log("Welcome");

console.log("\n===== Short-Circuit OR (||) Alternative Ternary operator =====");
let isLoggedIn = true;
isLoggedIn || console.log("Welcoame");

console.log("\n===== Nullish Coalescing (??) =====");
// It provides a default value only when the first value is null or undefined.
let username = null;
let result = username ?? "GUEST";
console.log(result);

console.log("\n===== Optional Chaining (?.) =====");
// It allows us to safely access an object's property without causing an error when an intermediate value is null or undefined.
let student = {
  name: "krishna",
  age: "11",
};
console.log(student?.name); 
console.log(student?.rollno); // undefined
