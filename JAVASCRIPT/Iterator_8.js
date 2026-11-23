/*
  - An Iterator is an object that allows you to access values one by one from a collection.
  - JavaScript uses iterators to go through values in arrays, strings, maps, sets, and other iterable objects.
  - An iterator must have a next() method that returns an object containing:
        - Symbol.iterator – create Object iterable 
        - value: The current value
        - done: Tells whether iteration is finished
        - exmaple: { value: 10, done: false }
*/

console.log("\n===== BUILT-IN ITERATOR =====");
let array = [10, 20, 30];
let iterator = array[Symbol.iterator](); // iterator is method, we call (()) the method
console.log(typeof iterator); // return object
console.log(iterator.next()); // The next() method moves the iterator forward and returns the next result.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("\n===== USER DEFINE ITERATOR =====");

let array1 = {
  current: 1,
  last: 3,
  message: "",

  [Symbol.iterator]() {
    return {
      current: this.current,
      last: this.last,

      next() {
        if (this.current <= this.last) {
          return { result: this.current++, done: false, message: "onging" };
        }

        return {
          result: undefined,
          done: true,
          message: "Stoped",
        };
      },
    };
  },
};

let custom = array1[Symbol.iterator]();
console.log(custom.next());
console.log(custom.next());
console.log(custom.next());
console.log(custom.next());


console.log(Symbol);