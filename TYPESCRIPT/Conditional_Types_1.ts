/* 
    Conditional Types:
        - Conditional Types allow TypeScript to select one type or another depending on a condition.
        - Just like JavaScript has if...else to make decisions based on values, TypeScript has Conditional Types to make decisions based on types.

            Purpose: To create flexible and reusable types.

            When to use:
            - When a type depends on another type.
            - When you want different return types based on input types.
            - When creating reusable generic types.

        - syntax: 
            type Result = SomeType extends OtherType ? TrueType : FalseType;

            - infer Keyword: infer allows TypeScript to automatically extract a type from another type.
                    When to use:
                    - To extract a function's return type.
                    - To extract array element types.
                    - To extract Promise result types.

        
*/

// condition types
// extends : check condition
// infer keyword: used extract type automatcally from another type like fucntion return type, array element type, promises result type

// exmaple 1:
type check<T> = T extends string ? "true" : "false";
type A1 = check<string>;
type A2 = check<number>;

let result1: A1 = "true";
let result2: A2 = "false";

console.log(result1);
console.log(result2);

// exmaple 2:
type IsString<T> = T extends string ? true : false;
type s1 = IsString<"hello">;
type s2 = IsString<10>;

let value1: s1 = true;
let value2: s2 = false;

console.log(value1);
console.log(value2);

// exmaple 3: infer

// infer in fucntion return type
type InferFunType<T> = T extends (...args: any[]) => infer R ? R : never;
type funct = InferFunType<(age: number) => number>;
let returnValue: funct = 100;
console.log(returnValue);

// infer in Array element type
type inferArrType<T> = T extends (infer A)[] ? A : never;
type arr = inferArrType<number[]>;
let arr1: arr = 25;
console.log(arr1);

// infer in promises result type
type inferPromises<T> = T extends Promise<infer P> ? P : never;
type pro = inferPromises<Promise<{ name: string; age: number }>>;
// type pro = inferPromises<{name: string, age: number}>;  // not allowed to directly passes object , first  converted into promises
let value3: pro = { name: "krihsna", age: 11 };

// infer in reaal project with promises
async function fetchUser() {
  return { name: "krishna", age: 11 };
}
type asyncPromises = inferPromises<ReturnType<typeof fetchUser>>;
let value5: asyncPromises = { name: "mohan", age: 5 };
console.log(value5);

// nested types
type nestedType<T> = T extends string
  ? "string Type"
  : T extends number
    ? "number Type"
    : "other type";

// UNION TYPES , DISTRIBUTIVE CONDITIONAL TYPES : make it parts
type unionType<T> = T extends string ? "text" : "other";
type U1 = unionType<string | number | boolean>;

let st: U1 = "text";
let oth: U1 = "other";

console.log(st);
console.log(oth);

// stop distribtion using array/ tuple [] : make it union package
type stopDistribtion<T> = [T] extends [string] ? "string" : "other";
type st1 = stopDistribtion<string | number>;
let stopResult: st1 = "other";

//CONDITIONAL TYPES WITH NEVER
type IsNever<T> = [T] extends [never] ? true : false;
type H1 = IsNever<never>;
type H2 = IsNever<string>;

// CONDITIONAL TYPES WITH ANY
type CheckAny<T> = T extends string ? "Yes" : "No";
type I1 = CheckAny<any>;

// EXCLUDE UTILITY TYPE

//1. EXCLUDE : remove
type MyUnion = string | number | boolean;
type ExcludeResult = Exclude<MyUnion, string>; // remove string
let excludeValue: ExcludeResult = 100;

// 2. EXTRACT
type ExtractResult = Extract<MyUnion, string | number>;
let extractValue1: ExtractResult = "Hello";
// let extractValue2: ExtractResult = true;

//3.NONNULLABLE
type MyNullableType = string | number | null | undefined;
type NonNullableResult = NonNullable<MyNullableType>;
let nonNullableValue1: NonNullableResult = "Hello";
// let nonNullableValue2: NonNullableResult = null; Error

//4. RETURNTYPE
function getUser() {
  return {
    name: "Pratik",
    age: 25,
  };
}
type UserReturn = ReturnType<typeof getUser>;
const user: UserReturn = {
  name: "Rahul",
  age: 30,
};

//5. PARAMETERS
function login(name: string, age: number): boolean {
  return true;
}
type LoginParameters = Parameters<typeof login>;
const loginData: LoginParameters = ["Pratik", 25];

//6. REAL-WORLD EXAMPLE - API RESPONSE
type ApiResponse<T> = T extends string ? { message: T } : { data: T };
type SuccessResponse = ApiResponse<string>;
const success: SuccessResponse = {
  message: "Login successful",
};

type UserResponse = ApiResponse<{
  id: number;
  name: string;
}>;
const userResponse: UserResponse = {
  data: {
    id: 1,
    name: "Pratik",
  },
};
console.log(success);
console.log(userResponse);
