/*
TypeScript Utility Types are ready-made types that help us create, modify, and extract types easily without writing everything from scratch.

TypeScript Utility Types List

  1	Awaited<T> : Gets the type of value returned by a Promise.
  2	NonNullable<T> : Removes null and undefined from a type.
  3	Parameters<T> : Gets all parameter types of a function.
  4	ReturnType<T> : Gets the return type of a function.
  5	ConstructorParameters<T> : Gets the parameter types of a class constructor.
  6	InstanceType<T> : Gets the object type created by a class.
  7	NoInfer<T> : Stops TypeScript from automatically guessing a type from a particular value.
  8	ThisParameterType<T> : Gets the type of this inside a function.
  9	OmitThisParameter<T> : Removes the this parameter type from a function.
10	Partial<T> : Makes all properties optional.
11	Required<T> : Makes all properties required.
12	Readonly<T> : Makes all properties read-only.
13	Record<K, T> : Creates an object with specific keys and value types.
14	Pick<T, K> : Selects specific properties from a type.
15	Omit<T, K> : Removes specific properties from a type.
16	Exclude<T, U> : Removes types from a union.
17	Extract<T, U> : Keeps only matching types from a union.
18	NonNullable<T> : Removes null and undefined.

*/

//1. Awaited<T>
// Purpose: Gets the value type inside a Promise.

type PromiseType1 = Awaited<Promise<string>>;
// Result: string

type PromiseType2 = Awaited<Promise<Promise<number>>>;
// Result: number

//2. NonNullable<T>
// Purpose: Removes null and undefined.

type UserName = NonNullable<string | null>;
// Result: string

type UserAge = NonNullable<number | undefined | null>;
// Result: number

//3. Parameters<T>
// Purpose: Gets all parameter types of a function.

function add(a: number, b: number): number {
  return a + b;
}

type AddParams = Parameters<typeof add>;
// Result: [a: number, b: number]

function createUser(name: string, age: number, active: boolean) {
  return { name, age, active };
}

type UserParams = Parameters<typeof createUser>;
// Result: [name: string, age: number, active: boolean]

//4. ReturnType<T>
// Purpose: Gets the return type of a function.

function getName() {
  return "Pratik";
}

type NameType = ReturnType<typeof getName>;
// Result: string

function getAge() {
  return 25;
}

type AgeType = ReturnType<typeof getAge>;
// Result: number

//5. ConstructorParameters<T>
// Purpose: Gets constructor parameter types.

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserConstructor = ConstructorParameters<typeof User>;
// Result: [name: string, age: number]

class Product {
  constructor(
    public id: number,
    public title: string,
  ) {}
}

type ProductConstructor = ConstructorParameters<typeof Product>;
// Result: [id: number, title: string]

//6. InstanceType<T>
// Purpose: Gets the object type created by a class.

class Student {
  name = "Pratik";
  age = 25;
}

type StudentInstance = InstanceType<typeof Student>;

const student: StudentInstance = {
  name: "Rahul",
  age: 20,
};

2;
class Car {
  brand = "BMW";
  price = 5000000;
}

type CarInstance = InstanceType<typeof Car>;

const car: CarInstance = {
  brand: "Audi",
  price: 4000000,
};

//7. NoInfer<T>
// Purpose: Stops TypeScript from inferring a type
// from a particular value.

function chooseColor<C extends string>(colors: C[], defaultColor: NoInfer<C>) {
  return defaultColor;
}

chooseColor(["Red", "Blue"], "Red");
// Allowed

// chooseColor(["Red", "Blue"], "Green");
// Error: Green is not in the colors list.

function chooseFruit<F extends string>(fruits: F[], selectedFruit: NoInfer<F>) {
  return selectedFruit;
}

chooseFruit(["Apple", "Mango"], "Apple");
// Allowed

// chooseFruit(["Apple", "Mango"], "Banana");
// Error: Banana is not in the fruits list.

//8. ThisParameterType<T>
// Purpose: Gets the type of this in a function.

function printUser(this: { name: string }) {
  console.log(this.name);
}

type UserThis = ThisParameterType<typeof printUser>;
// Result: { name: string }

function printCar(this: { brand: string }) {
  console.log(this.brand);
}

type CarThis = ThisParameterType<typeof printCar>;
// Result: { brand: string }

//9. OmitThisParameter<T>
// Purpose: Removes the this parameter type
// from a function.

function showUser(this: { name: string }, age: number) {
  console.log(this.name, age);
}

type ShowUserWithoutThis = OmitThisParameter<typeof showUser>;
// Result: (age: number) => void

function showProduct(this: { title: string }, price: number) {
  console.log(this.title, price);
}

type ShowProductWithoutThis = OmitThisParameter<typeof showProduct>;
// Result: (price: number) => void

// 20. Partial<T>
// Purpose: Makes all properties optional.

interface UserData {
  name: string;
  age: number;
}

const user1: Partial<UserData> = {
  name: "Pratik",
};

interface ProductData {
  title: string;
  price: number;
}

const product1: Partial<ProductData> = {
  price: 500,
};

// 21. Required<T>
// Purpose: Makes all properties required.

interface UserInfo {
  name?: string;
  age?: number;
}

const user2: Required<UserInfo> = {
  name: "Rahul",
  age: 25,
};

interface EmployeeInfo {
  name?: string;
  salary?: number;
}

const employee: Required<EmployeeInfo> = {
  name: "Amit",
  salary: 30000,
};

// 22. Readonly<T>
// Purpose: Makes all properties read-only.

interface UserProfile {
  name: string;
  age: number;
}

const user3: Readonly<UserProfile> = {
  name: "Pratik",
  age: 25,
};

// user3.name = "Rahul"; // Error

interface Mobile {
  brand: string;
  price: number;
}

const mobile: Readonly<Mobile> = {
  brand: "Samsung",
  price: 30000,
};

// mobile.price = 40000; // Error

// 23. Record<K, T>
// Purpose: Creates an object with specific keys
// and value types.

type Days = "Monday" | "Tuesday" | "Wednesday";

const workingDays: Record<Days, string> = {
  Monday: "Work",
  Tuesday: "Work",
  Wednesday: "Work",
};

type Subjects = "Maths" | "Science";

const marks: Record<Subjects, number> = {
  Maths: 90,
  Science: 85,
};

// 24. Pick<T, K>
// Purpose: Selects specific properties.

interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonName = Pick<Person, "name">;

const person1: PersonName = {
  name: "Pratik",
};

interface EmployeeData {
  name: string;
  salary: number;
  department: string;
}

type EmployeeNameSalary = Pick<EmployeeData, "name" | "salary">;

const employee1: EmployeeNameSalary = {
  name: "Rahul",
  salary: 40000,
};

// 25. Omit<T, K>
// Purpose: Removes specific properties.

interface UserDetails {
  name: string;
  age: number;
  password: string;
}

type PublicUser = Omit<UserDetails, "password">;

const publicUser: PublicUser = {
  name: "Pratik",
  age: 25,
};

interface ProductDetails {
  name: string;
  price: number;
  stock: number;
}

type ProductWithoutStock = Omit<ProductDetails, "stock">;

const product2: ProductWithoutStock = {
  name: "Laptop",
  price: 50000,
};

// 26. Exclude<T, U>
// Purpose: Removes matching types from a union.

type AllColors = "Red" | "Blue" | "Green";

type AvailableColors = Exclude<AllColors, "Red">;
// Result: "Blue" | "Green"

type AllNumbers = 1 | 2 | 3 | 4;

type RemainingNumbers = Exclude<AllNumbers, 1 | 2>;
// Result: 3 | 4

// 27. Extract<T, U>
// Purpose: Keeps only matching types.

type Colors = "Red" | "Blue" | "Green";

type SelectedColor = Extract<Colors, "Red" | "Blue">;
// Result: "Red" | "Blue"

type MixedTypes = string | number | boolean;

type SelectedTypes = Extract<MixedTypes, string | number>;
// Result: string | number

// 28. NonNullable<T>
// Purpose: Removes null and undefined.

type MyName = NonNullable<string | null>;
// Result: string

type MyValue = NonNullable<number | null | undefined>;
// Result: number

export {};
