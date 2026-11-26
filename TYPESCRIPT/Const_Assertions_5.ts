/*

as const is used to make values fixed (readonly) so they cannot be changed.
Where we use it: When we want TypeScript to keep the exact value instead of changing it into a general type.

*/

// 1. String as const
const name = "Pratik" as const;
// name = "Rahul"; // Error

// 2. Number as const
const age = 25 as const;
// age = 30; // Error

// 3. Boolean as const
const isLoggedIn = true as const;
// isLoggedIn = false; // Error

// 4. Array as const
const fruits = ["Apple", "Mango", "Banana"] as const;
// fruits.push("Orange"); // Error

// 5. Object as const
const user = {
  name: "Pratik",
  age: 25,
} as const;

// user.name = "Rahul"; // Error
// user.age = 30; // Error

// 6. Nested Object as const
const student = {
  name: "Rahul",
  address: {
    city: "Pune",
    country: "India",
  },
} as const;

// student.address.city = "Mumbai"; // Error

// 7. Function Return Value
function getStatus() {
  return "Success" as const;
}

const status = getStatus();
// Type of status = "Success"

// 8. Array of Objects
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
] as const;

// products.push({ id: 3, name: "Tablet" }); // Error

// 9. HTTP Methods
const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

// methods.GET = "PATCH"; // Error

// 10. Days of the Week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

// days.push("Saturday"); // Error

export {};
