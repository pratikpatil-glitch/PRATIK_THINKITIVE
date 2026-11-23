/* 
    THIS
      - this is a special keyword in JavaScript that refers to the object which is calling the function (in many common cases).

    1. this inside a normal function
        When a normal function is called directly:
            - In non-strict mode, this refers to the global object (window in browsers).
            - In strict mode, this is undefined.

    2. this inside an object: When you call a function using an object, this refers to that object.

    3. this inside an arrow function: 
        - Arrow functions do not have their own this.
        - They take this from their surrounding (lexical) scope.

    4. this inside a constructor function. A constructor function is used to create multiple objects.
    5. this inside a class: In JavaScript classes, this refers to the current instance created using the class.

    6. this inside a nested function: A normal nested function does not automatically inherit this from its outer method.In strict mode, this inside inner() is undefined.
            Solution using arrow function


*/

const user = {
  name: "Pratik",

  // Wrong Way
  //   show: () => {
  //     console.log(this.name); // undefined
  //   }

  // correct Way
  show: function () {
    const print = () => {
      console.log(this.name); // Pratik
    };

    print();
  },
};

user.show();

// this inside a nested function
const userObj = {
  name: "Pratik",
  //   show: function () {
  //     function inner() {
  //       console.log(this);   // undefined
  //     }
  //     inner();
  //   },

  // Solution using arrow function
  show: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

userObj.show();
