
"use strict";

// Variables
let a = 10;
let b = 5;

// =====================================
// 1. ARITHMETIC OPERATORS
// =====================================

console.log("\n===== ARITHMETIC OPERATORS =====");

console.log(`Addition (+): ${a + b}`);
console.log(`Subtraction (-): ${a - b}`);
console.log(`Multiplication (*): ${a * b}`);
console.log(`Division (/): ${a / b}`);
console.log(`Modulus (%): ${a % b}`);
console.log(`Exponentiation (**): ${a ** b}`);

let count = 10;

console.log(`Increment (count++): ${count++}`);
console.log(`After Increment: ${count}`);
console.log(`Decrement (count--): ${count--}`);
console.log(`After Decrement: ${count}`);

let num = 10;

console.log(`Pre-increment (++num): ${++num}`);
console.log(`Pre-decrement (--num): ${--num}`);


// =====================================
// 2. ASSIGNMENT OPERATORS
// =====================================

console.log("\n===== ASSIGNMENT OPERATORS =====");

let x = 10;

console.log(`Assignment (=): ${x}`);

x += 5;
console.log(`Addition Assignment (+=): ${x}`);

x -= 3;
console.log(`Subtraction Assignment (-=): ${x}`);

x *= 2;
console.log(`Multiplication Assignment (*=): ${x}`);

x /= 4;
console.log(`Division Assignment (/=): ${x}`);

x %= 3;
console.log(`Modulus Assignment (%=): ${x}`);

x **= 2;
console.log(`Exponentiation Assignment (**=): ${x}`);


// =====================================
// 3. COMPARISON OPERATORS
// =====================================

console.log("\n===== COMPARISON OPERATORS =====");

let p = 10;
let q = 5;

console.log(`Equal (==): ${p == q}`);
console.log(`Strict Equal (===): ${p === q}`);
console.log(`Not Equal (!=): ${p != q}`);
console.log(`Strict Not Equal (!==): ${p !== q}`);
console.log(`Greater Than (>): ${p > q}`);
console.log(`Less Than (<): ${p < q}`);
console.log(`Greater Than or Equal (>=): ${p >= q}`);
console.log(`Less Than or Equal (<=): ${p <= q}`);

console.log(`Loose Equality (10 == "10"): ${10 == "10"}`);
console.log(`Strict Equality (10 === "10"): ${10 === "10"}`);


// =====================================
// 4. LOGICAL OPERATORS
// =====================================

console.log("\n===== LOGICAL OPERATORS =====");

let age = 20;
let hasTicket = true;

console.log(`AND (&&): ${age >= 18 && hasTicket}`);
console.log(`OR (||): ${age >= 18 || hasTicket}`);
console.log(`NOT (!): ${!hasTicket}`);


// =====================================
// 5. TERNARY OPERATOR
// =====================================

console.log("\n===== TERNARY OPERATOR =====");

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(`Ternary (? :): ${result}`);


// =====================================
// 6. TYPE OPERATORS
// =====================================

console.log("\n===== TYPE OPERATORS =====");

let name = "Pratik";
let number = 100;
let fruits = ["Apple", "Mango"];

console.log(`typeof String: ${typeof name}`);
console.log(`typeof Number: ${typeof number}`);
console.log(`typeof Boolean: ${typeof true}`);
console.log(`typeof Array: ${typeof fruits}`);
console.log(`typeof Object: ${typeof {}}`);

console.log(`instanceof Array: ${fruits instanceof Array}`);
console.log(`instanceof Object: ${fruits instanceof Object}`);


// =====================================
// 7. BITWISE OPERATORS
// =====================================

console.log("\n===== BITWISE OPERATORS =====");

let m = 5;
let n = 3;

console.log(`Bitwise AND (&): ${m & n}`);
console.log(`Bitwise OR (|): ${m | n}`);
console.log(`Bitwise XOR (^): ${m ^ n}`);
console.log(`Bitwise NOT (~): ${~m}`);
console.log(`Left Shift (<<): ${m << 1}`);
console.log(`Right Shift (>>): ${m >> 1}`);
console.log(`Zero-fill Right Shift (>>>): ${m >>> 1}`);


// =====================================
// 8. STRING OPERATORS
// =====================================

console.log("\n===== STRING OPERATORS =====");

let firstName = "Pratik";
let lastName = "Patil";

console.log(`String Addition (+): ${firstName + " " + lastName}`);

let message = "Hello";

message += " Pratik";

console.log(`String Assignment (+=): ${message}`);


// =====================================
// 9. NULLISH OPERATORS
// =====================================

console.log("\n===== NULLISH OPERATORS =====");

let userName = null;

console.log(`Nullish Coalescing (??): ${userName ?? "Guest"}`);

let city = null;

city ??= "Pune";

console.log(`Nullish Assignment (??=): ${city}`);


// =====================================
// 10. OPTIONAL CHAINING
// =====================================

console.log("\n===== OPTIONAL CHAINING =====");

let student = {
    name: "Pratik",
    address: {
        city: "Pune"
    }
};

console.log(`Optional Chaining (?.): ${student.address?.city}`);

console.log(`Missing Property (?.): ${student.contact?.phone}`);


// =====================================
// 11. RELATIONAL OPERATOR
// =====================================

console.log("\n===== RELATIONAL OPERATOR =====");

let employee = {
    name: "Pratik",
    age: 25
};

console.log(`Property Exists (in): ${"name" in employee}`);
console.log(`Property Missing (in): ${"salary" in employee}`);


// =====================================
// 12. UNARY OPERATORS
// =====================================

console.log("\n===== UNARY OPERATORS =====");

let value = "100";

console.log(`Unary Plus (+): ${+value}`);
console.log(`Unary Minus (-): ${-value}`);
console.log(`Logical NOT (!): ${!true}`);
console.log(`Bitwise NOT (~): ${~5}`);
console.log(`typeof: ${typeof value}`);

console.log(`Void Operator (void): ${void (10 + 20)}`);

let product = {
    name: "Laptop",
    price: 50000
};

delete product.price;

console.log(`Delete Operator: ${JSON.stringify(product)}`);


// =====================================
// 13. LOGICAL ASSIGNMENT OPERATORS
// =====================================

console.log("\n===== LOGICAL ASSIGNMENT OPERATORS =====");

let value1 = true;

value1 &&= "Hello";

console.log(`AND Assignment (&&=): ${value1}`);

let value2 = "";

value2 ||= "Guest";

console.log(`OR Assignment (||=): ${value2}`);

let value3 = null;

value3 ??= "Default";

console.log(`Nullish Assignment (??=): ${value3}`);


// =====================================
// 14. BITWISE ASSIGNMENT OPERATORS
// =====================================

console.log("\n===== BITWISE ASSIGNMENT OPERATORS =====");

let bit = 5;

bit &= 3;
console.log(`AND Assignment (&=): ${bit}`);

bit = 5;
bit |= 3;
console.log(`OR Assignment (|=): ${bit}`);

bit = 5;
bit ^= 3;
console.log(`XOR Assignment (^=): ${bit}`);

bit = 5;
bit <<= 1;
console.log(`Left Shift Assignment (<<=): ${bit}`);

bit = 8;
bit >>= 1;
console.log(`Right Shift Assignment (>>=): ${bit}`);

bit = 8;
bit >>>= 1;
console.log(`Zero-fill Right Shift Assignment (>>>=): ${bit}`);


// =====================================
// 15. COMMA OPERATOR
// =====================================

console.log("\n===== COMMA OPERATOR =====");

let commaResult = (10, 20, 30);

console.log(`Comma Operator (,): ${commaResult}`);

let first = 10;
let second = 20;

let finalResult = (first += 5, second += 10, first + second);

console.log(`Multiple Expressions (,): ${finalResult}`);


// =====================================
// 16. OBJECT CREATION OPERATOR
// =====================================

console.log("\n===== NEW OPERATOR =====");

let today = new Date();

console.log(`New Date Object: ${today}`);

function Student(studentName, studentAge) {
    this.name = studentName;
    this.age = studentAge;
}

let student1 = new Student("Pratik", 25);

console.log(`New Object Name: ${student1.name}`);
console.log(`New Object Age: ${student1.age}`);


// =====================================
// 17. SPREAD AND REST SYNTAX
// =====================================

console.log("\n===== SPREAD AND REST SYNTAX =====");

// Spread Operator

let oldFruits = ["Apple", "Mango"];

let newFruits = [...oldFruits, "Banana"];

console.log(`Spread Operator (...): ${newFruits}`);

// Spread with Objects

let oldStudent = {
    name: "Pratik",
    age: 25
};

let newStudent = {
    ...oldStudent,
    city: "Pune"
};

console.log(`Spread Object: ${JSON.stringify(newStudent)}`);

// Rest Operator

function addNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(`Rest Operator (...): ${addNumbers(10, 20, 30, 40)}`);


// =====================================
// END OF JAVASCRIPT OPERATORS
// =====================================

console.log("\n===== ALL OPERATORS COMPLETED =====");
