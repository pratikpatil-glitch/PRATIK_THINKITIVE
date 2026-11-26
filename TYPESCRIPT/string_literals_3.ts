/* 

Template Literal Types allow us to create new string types by combining existing string types.

*/

// using string
type welcome = `Hello ${string}`;
let user1: welcome = "Hello pratik";

// USING UNION TYPES
type Color = "Red" | "Green" | "Blue";
type ColorMessage = `My favorite color is ${Color}`;
let color1: ColorMessage = "My favorite color is Red";

// COMBINING MULTIPLE UNION TYPES
type Size = "Small" | "Medium" | "Large";
type Product = "Shirt" | "Shoes";
type ProductDetails = `${Size} ${Product}`;

// USING KEYOF
type User = {
  name: string;
  age: number;
  email: string;
};
type UserEvents = `${keyof User}Changed`;
let event1: UserEvents = "nameChanged";

//  USING MAPPED TYPES
type UserData = {
  name: string;
  age: number;
};

type Getters<T> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key];
};
type UserGetters = Getters<UserData>;
const userGetters: UserGetters = {
  getName: () => "Pratik",
  getAge: () => 25,
};

// * ADDING PREFIX AND SUFFIX
type Status = "Success" | "Error" | "Loading";
type ApiStatus = `API_${Status}`;

// Uppercase
type Upper = Uppercase<"hello">;
let upper: Upper = "HELLO";

// Lowercase
type Lower = Lowercase<"HELLO">;
let lower: Lower = "hello";

// Capitalize
type FirstCapital = Capitalize<"pratik">;
let capital: FirstCapital = "Pratik";

// Uncapitalize
type FirstSmall = Uncapitalize<"Pratik">;

// CREATING EVENT NAMES
type AppEvents = {
  click: string;
  change: number;
  submit: boolean;
};
type EventNames<T> = `${keyof T & string}Event`;
type MyEvents = EventNames<AppEvents>;
let clickEvent: MyEvents = "clickEvent";
let changeEvent: MyEvents = "changeEvent";

// PRACTICAL EXAMPLE - EVENT SYSTEM
type UserProfile = {
  name: string;
  age: number;
};

type changeEvent<T> = {
  [key in keyof T & string as `${key}changed`]: (value: T[key]) => void;
};

const userEvents: changeEvent<UserProfile> = {
  namechanged: (value) => {
    console.log(value);
  },
  agechanged: (value) => {
    console.log(value);
  },
};
// Calling event handlers
userEvents.namechanged("Pratik");
userEvents.agechanged(25);

export {};
