/* 
  Type Conversion means changing one data type into another data type.

*/

console.log("----------------- TYPE CONVERSIONS -----------------\n");

console.log(`-------- Implicit conversion --------`);
let a = "10";
let b = 10;
console.log(`Implicit conversion ${a + b}`);

console.log(`\n\n-------- Explicit conversion --------`);
let str = "10";
let convert = Number(str);
let num2 = 10;
console.log(`Explicit conversion ${convert + num2}`);

console.log(`\n\n-------- All 8 Falsy Values in JavaScript --------`);

// 1. Boolean false
console.log(Boolean(false)); // false

// 2. Number zero
console.log(Boolean(0)); // false

// 3. Negative zero
console.log(Boolean(-0)); // false

// 4. BigInt zero
console.log(Boolean(0n)); // false

// 5. Empty string
console.log(Boolean("")); // false

// 6. null
console.log(Boolean(null)); // false

// 7. undefined
console.log(Boolean(undefined)); // false

// 8. NaN (Not-a-Number)
console.log(Boolean(NaN)); // false

console.log(`\n\n-------- Common Truthy Values --------`);

// Non-empty strings (even spaces, "false", "0")
console.log(Boolean("Hello")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true

// Non-zero numbers (positive, negative, decimals, Infinity)
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

// Non-zero BigInt
console.log(Boolean(1n)); // true
console.log(Boolean(-1n)); // true

// Objects and Arrays (even empty ones!)
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean({ a: 1 })); // true
console.log(Boolean([1, 2])); // true

// Functions and Dates
console.log(Boolean(() => {})); // true
console.log(Boolean(new Date())); // true
