/*
A Data Type tells JavaScript what kind of information we are storing.
    1. Primitive: Single basic values
        - String
        - Number
        - Boolean
        - Undefined
        - Null
        - BigInt
        - Symbol

    2. Non-Primitive: Objects and collections
        - Object
        - Array
        - Function

*/

console.log(
  "----------------------- Primitive types ----------------------------",
);
console.log(typeof "krishna");
console.log(typeof 10, typeof 100.4);
console.log(typeof true, typeof false);
let a;
console.log(typeof a);
let b = null;
console.log(typeof b);
console.log(typeof 234567810n);
let s1 = Symbol("id_1");
let s2 = Symbol("id_1");
console.log(s1 == s2, s1 === s2);
console.log(typeof s1);

console.log(
  "\n\n----------------------- non-Primitive types ----------------------------",
);
console.log("\n------------ 1. Object ---------------");
const const_Obj = {
  name: "krishna",
  age: 11,
};

// const_Obj = {
//   // TypeError: Assignment to constant variable.
//   name: "radhe",
//   age: 10,
// };
console.log("const obj = ", const_Obj);

let let_Obj = {
  name: "krishna",
  age: 11,
};

let_Obj = {
  name: "radhe",
  age: 10,
};
console.log("let obj = ", let_Obj, "type: ", typeof let_Obj);
console.log("Access object by (.) = ", let_Obj.name);
console.log("Access object by (bracket)", let_Obj["name"]);

console.log("\n------------ 2. Array ---------------");
const constArr = [10, 20, 30, 40];
console.log("const Array = ", constArr, "type: ", typeof constArr);
constArr[5] = 500; // add the value
// constArr = [100, 200, 300]; // TypeError: Assignment to constant variable.
console.log("const Array = ", constArr);
console.log("Access varibale (index) = ", constArr[0]);
console.log(
  "Access varibale (at: negative) = ",
  constArr.at(0),
  constArr.at(-1),
);

let letArr = [1, 2, 3, 4, 5];
console.log("let Array = ", letArr);
letArr = [10, 20, 30, 40];
console.log("let new Array assign = ", letArr);

console.log("\n------------ 3. Function ---------------");
function fun() {
  console.log("add: ", 10 + 20);
}
console.log("type of function: ", typeof fun);
fun();
