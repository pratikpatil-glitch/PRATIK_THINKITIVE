/* 

In TypeScript, the infer keyword is used to extract or identify a type from another type. 
infer is used to automatically find and extract a type from another type.

Where we use it: When we don't know the exact type and want TypeScript to find it for us.
*/

type getType<T> = T extends Array<infer U> ? U : never;
type Result = getType<string[]>;
let value: Result = "hello";
console.log(value);

// function return
type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;

function getName() {
  return "pratik";
}
type returnType = GetReturn<typeof getName>;
let returnValue: returnType = "Hello";
console.log(returnValue);

export {};

// parameter in fucntion
type parameterFun<T> = T extends (value: infer U) => any ? U : never;
function getUser(name: string) {
  console.log(`Hello ${name}`);
}
type GetParamType = parameterFun<typeof getUser>;
let parameterValue: GetParamType = "krishna";

// Extact Array
type GetElement<T> = T extends (infer U)[] ? U : never;
type ArrayElement = GetElement<number[]>;

// EXTRACTING PROMISE VALUE TYPE
type promisesType<T> = T extends Promise<infer U> ? U : never;
type promType = Promise<{ name: String; age: 20 }>;
type promisesValue = promisesType<promType>;

//  EXTRACTING OBJECT PROPERTY TYPE
type GetName<T> = T extends { name: infer U } ? U : never;
type User = {
  name: string;
  age: number;
};
type NameType = GetName<User>;

export {};

































































/*

  // ==================================================
  // 1. BASIC INFER
  // ==================================================

  type GetType<T> = T extends Array<infer U> ? U : never;

  type Result1 = GetType<string[]>;

  let basicValue: Result1 = "Hello";

  console.log("1. Basic Infer:", basicValue);

  // ==================================================
  // 2. EXTRACTING FUNCTION RETURN TYPE
  // ==================================================

  type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;

  function getName() {
    return "Pratik";
  }

  type ReturnType1 = GetReturn<typeof getName>;

  let returnValue: ReturnType1 = "Hello";

  console.log("2. Return Type:", returnValue);

  // ==================================================
  // 3. EXTRACTING FUNCTION PARAMETER TYPE
  // ==================================================

  type GetParameter<T> = T extends (value: infer P) => any ? P : never;

  function greet(name: string) {
    return `Hello ${name}`;
  }

  type ParameterType = GetParameter<typeof greet>;

  let parameterValue: ParameterType = "Pratik";

  console.log("3. Parameter Type:", parameterValue);

  // ==================================================
  // 4. EXTRACTING ARRAY ELEMENT TYPE
  // ==================================================

  type GetElement<T> = T extends (infer U)[] ? U : never;

  type Numbers = number[];

  type ArrayElement = GetElement<Numbers>;

  let numberValue: ArrayElement = 100;

  console.log("4. Array Element:", numberValue);

  // ==================================================
  // 5. EXTRACTING PROMISE VALUE TYPE
  // ==================================================

  type GetPromiseValue<T> = T extends Promise<infer U> ? U : never;

  type MyPromise = Promise<string>;

  type PromiseValue = GetPromiseValue<MyPromise>;

  let promiseValue: PromiseValue = "Promise Completed";

  console.log("5. Promise Value:", promiseValue);

  // ==================================================
  // 6. EXTRACTING OBJECT PROPERTY TYPE
  // ==================================================

  type GetName<T> = T extends { name: infer U } ? U : never;

  type User = {
    name: string;
    age: number;
  };

  type NameType = GetName<User>;

  let username: NameType = "Pratik";

  console.log("6. Object Property:", username);

  // ==================================================
  // 7. INFER WITH CONDITIONAL TYPES
  // ==================================================

  type Check<T> =
    T extends Promise<infer U>
      ? U extends string
        ? "String Promise"
        : "Other Promise"
      : "Not a Promise";

  type Check1 = Check<Promise<string>>;
  type Check2 = Check<Promise<number>>;
  type Check3 = Check<string>;

  let checkValue1: Check1 = "String Promise";
  let checkValue2: Check2 = "Other Promise";
  let checkValue3: Check3 = "Not a Promise";

  console.log("7. Conditional:", checkValue1);
  console.log("7. Conditional:", checkValue2);
  console.log("7. Conditional:", checkValue3);

  // ==================================================
  // 8. USING MULTIPLE INFER
  // ==================================================

  type GetTypes<T> = T extends [infer A, infer B] ? [A, B] : never;

  type MyTuple = [string, number];

  type TupleTypes = GetTypes<MyTuple>;

  let tupleValue: TupleTypes = ["Pratik", 25];

  console.log("8. Multiple Infer:", tupleValue);

  // ==================================================
  // 9. EXTRACTING TUPLE ELEMENTS
  // ==================================================

  type GetFirst<T> = T extends [infer First, ...any[]] ? First : never;

  type MyData = [string, number, boolean];

  type FirstElement = GetFirst<MyData>;

  let firstValue: FirstElement = "Pratik";

  console.log("9. First Tuple Element:", firstValue);

  // ==================================================
  // 10. EXTRACTING FIRST ARRAY ELEMENT
  // ==================================================

  type GetFirstArrayElement<T> = T extends readonly [infer First, ...unknown[]]
    ? First
    : never;

  type MyArray = readonly [number, string, boolean];

  type FirstArrayValue = GetFirstArrayElement<MyArray>;

  let arrayFirst: FirstArrayValue = 100;

  console.log("10. First Array Element:", arrayFirst);

  // ==================================================
  // 11. EXTRACTING LAST ARRAY ELEMENT
  // ==================================================

  type GetLast<T> = T extends [...unknown[], infer Last] ? Last : never;

  type MyValues = [string, number, boolean];

  type LastElement = GetLast<MyValues>;

  let lastValue: LastElement = true;

  console.log("11. Last Element:", lastValue);

  // ==================================================
  // 12. EXTRACTING FUNCTION ARGUMENTS
  // ==================================================

  type GetArguments<T> = T extends (...args: infer A) => any ? A : never;

  function add(a: number, b: number) {
    return a + b;
  }

  type ArgumentsType = GetArguments<typeof add>;

  let argumentsValue: ArgumentsType = [10, 20];

  console.log("12. Function Arguments:", argumentsValue);

  // ==================================================
  // 13. EXTRACTING CONSTRUCTOR INSTANCE TYPE
  // ==================================================

  type GetInstance<T> = T extends new (...args: any[]) => infer R ? R : never;

  class Student {
    name = "Pratik";
    age = 25;
  }

  type StudentInstance = GetInstance<typeof Student>;

  const student: StudentInstance = new Student();

  console.log("13. Constructor Instance:", student);

  // ==================================================
  // 14. EXTRACTING STRING TYPE
  // ==================================================

  type GetString<T> = T extends `${infer U}` ? U : never;

  type StringResult = GetString<"Hello World">;

  let stringValue: StringResult = "Hello World";

  console.log("14. String Infer:", stringValue);

  // ==================================================
  // 15. PRACTICAL EXAMPLE - API RESPONSE
  // ==================================================

  type ApiResponse<T> = {
    status: number;
    message: string;
    data: T;
  };

  type ExtractData<T> = T extends ApiResponse<infer U> ? U : never;

  type UserData = {
    id: number;
    name: string;
  };

  type Response = ApiResponse<UserData>;

  type ExtractedUser = ExtractData<Response>;

  const apiUser: ExtractedUser = {
    id: 1,
    name: "Pratik",
  };

  console.log("15. API Response:", apiUser);

  // ==================================================
  // 16. EXTRACTING NESTED PROMISE TYPE
  // ==================================================

  type DeepPromise<T> = T extends Promise<infer U> ? DeepPromise<U> : T;

  type NestedPromise = Promise<Promise<string>>;

  type FinalValue = DeepPromise<NestedPromise>;

  let finalValue: FinalValue = "Completed";

  console.log("16. Nested Promise:", finalValue);

  // ==================================================
  // 17. EXTRACTING FUNCTION RETURN TYPE WITH NESTED OBJECT
  // ==================================================

  type GetData<T> = T extends (...args: any[]) => { data: infer U } ? U : never;

  function getUser() {
    return {
      data: {
        id: 1,
        name: "Pratik",
      },
    };
  }

  type UserResult = GetData<typeof getUser>;

  const extractedData: UserResult = {
    id: 2,
    name: "Rahul",
  };

  console.log("17. Nested Object:", extractedData);

  // ==================================================
  // END OF INFER KEYWORD
  // ==================================================

  export {};
*/
