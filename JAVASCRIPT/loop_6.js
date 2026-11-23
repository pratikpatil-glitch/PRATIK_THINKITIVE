/* 
  A loop means repeating something again and again until a condition becomes false.

  1. for Loop: A for loop is used when you generally know how many times you want to repeat something.
  2. while Loop: A while loop repeats code as long as its condition is true.
  3. do...while Loop: It executes the code at least once, even if the condition is false.
  4. for...of Loop: The for...of loop is used to get individual values from an iterable, such as:
     Arrays, Strings, Maps, Sets
  5. for...in Loop: The for...in loop is mainly used to get the keys (property names) of an object.
  6. forEach() Method: forEach() is an array method that executes a function once for every array element. You cannot stop a forEach() loop using break or continue.
  7. Loop with Multiple Variables
            


*/

console.log("\n===== FOR Loop =====");
// Good: `i` changes each round
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1, 2, 3, 4, 5
}

// Error: TypeError: Assignment to constant variable.
// for (const i = 1; i <= 5; i++) {
//     console.log(i);
// }

console.log("\n===== WHILE Loop =====");
// `let`: counter updates each round
let count = 1;
while (count <= 3) {
  console.log(count);
  count++;
}

// `const`: valid only if `config` itself isn't reassigned
const limits = { attempts: 0, max: 3 };
while (limits.attempts < limits.max) {
  limits.attempts++; // Mutating a property is allowed; `limits = ...` would fail
  console.log(`Attempt ${limits.attempts}`);
}

console.log("\n===== DO WHILE Loop =====");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("\n===== for...of Loop =====");
// Array
const fruits = ["mango", "apple", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

// String
let name = "Krishna";
for (let ch of name) {
  console.log(ch);
}

console.log("\n===== for...in Loop =====");
let student = {
  name: "Rahul",
  age: 20,
  city: "Pune",
};

for (let key in student) {
  console.log(key); // key
  console.log(student[key]); // value
}

console.log("\n===== forEach Loop =====");
let fruits1 = ["Apple", "Mango", "Banana"];
fruits1.forEach((fruit, index) => {
  console.log(index, fruit);
});

console.log("\n===== Loop with Multiple Variables =====");
for (let i = 1, j = 5; i <= 5; i++, j--) {
  console.log(i, j);
}
