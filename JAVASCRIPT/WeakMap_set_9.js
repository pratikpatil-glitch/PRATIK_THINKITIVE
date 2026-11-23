/* 
1. weakMap:
  - A WeakMap is a collection that stores data in key-value pairs, just like a Map.
  - The main difference is that WeakMap keys must be objects, and it holds those keys weakly.
  - Map = Strong reference; WeakMap = Weak reference.
  - WeakMap is not iterable: You cannot use size, keys(), values(), or forEach().
  - Purpose: To store private or additional information associated with objects without preventing those objects from being garbage-collected.
       - set(key, value): Adds or updates a value
       - get(key): Gets the value
       - has(key): Checks whether key exists
       - delete(key): Removes a key-value pair

2. weakSet:
    - A WeakSet is a collection that stores objects only, without storing key-value pairs.
    - Unlike a normal Set, it holds objects weakly, meaning it does not prevent them from being garbage-collected.

map and set: if remove value from map and set, it will not go to garbage collect beacause of strong reference
WeakMap nad weakset : weak refernce
*/

console.log("\n===== WeakMap =====");

let Wmap = new WeakMap();

let student1 = {
  name: "krishna",
  age: 11,
};
let student2 = {
  name: "Moahan",
  age: 7,
};
let student3 = {
  name: "Moahan",
  age: 7,
};
Wmap.set(student1, "1"); // (object, value)
Wmap.set(student2, "2");
Wmap.set(student3, "2");

console.log(Wmap.has(student2));

console.log(Wmap.get(student1));

// Wmap = null
console.log(Wmap.delete(student3));

console.log("\n===== WeakSet =====");
let set = new WeakSet();
set.add(student1);
set.add(student2);
set.add(student3);

console.log(set.has(student1));
console.log(set.delete(student3));
