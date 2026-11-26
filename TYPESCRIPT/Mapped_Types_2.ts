/* 
Mapped Types:
    - Mapped Types allow us to create a new type by transforming the properties of an existing type.
    - Purpose: To reuse existing types and change their properties.
    - When to use:
        - When you want to make all properties optional.
        - When you want to make all properties readonly.
        - When you want to transform existing object types.
        - When you want to create reusable utility types.

         type NewType = {[Key in keyof OldType]: OldType[Key];

    - keyof Keyword: keyof gets all the property names of an object type and creates a union of those names.
    - in Keyword: In Mapped Types, in loops through each key in a union of property names.
};
*/

// ==========================================
// 1. BASIC MAPPED TYPES
// ==========================================

type User = {
  name: string;
  age: number;
  email: string;
};

// keyof User = every key of User (name, age, email).
// user[key] reurn type of key like (string, number).
// key in = triverse on user object assign type to every key.
// exmaple: name: string; age: number; email: string;

type NewUser = {
  [key in keyof User]: User[key];
};
const user1: NewUser = {
  name: "pratik",
  age: 11,
  email: "pratik@gmail.com",
};

//1. readonly
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
const user2: ReadonlyUser = {
  name: "pratik",
  age: 11,
  email: "pratik@gmail.com",
};
// user2.name ="krishna";  // Error

// 2. REMOVE readonly (-readonly)
type RemoveReadonlyUser = {
  -readonly [key in keyof User]: User[key];
};
const user3: RemoveReadonlyUser = {
  name: "pratik",
  age: 11,
  email: "pratik@gmail.com",
};
user3.name = "krishna";

//3. OPTIONAL (?)
type OptionalUser = {
  [key in keyof User]?: User[key];
};

//4. REMOVE OPTIONAL (-?)
type RemoveOptionalUser = {
  [key in keyof User]-?: User[key];
};

//5. ADD readonly AND OPTIONAL (+)
type NewReadonlyUser = {
  +readonly [Key in keyof User]+?: User[Key];
};

// 6. KEY REMAPPING USING as
type Getters = {
  [Key in keyof User as `get_${Key}`]: User[Key];
};
const user8: Getters = {
  get_name: "Pratik",
  get_age: 25,
  get_email: "pratik@gmail.com",
};

// 7. Partial<T> : Make all properties optional
type PartialUser = Partial<User>;
const user9: PartialUser = {
  name: "Pratik",
};

// 8. Required<T>: Make all properties required
type OptionalData = {
  name: string;
  age: number;
};
type RequiredUser = Required<OptionalData>;
const user10: RequiredUser = {
  name: "Pratik",
  age: 25,
};

//9. Pick<T, K>:  Select specific properties
type SelectedUser = Pick<User, "name" | "email">;
const user12: SelectedUser = {
  name: "Pratik",
  email: "pratik@gmail.com",
};

// 10. Omit<T, K> : Remove specific properties
type OmittedUser = Omit<User, "age">;
const user13: OmittedUser = {
  name: "Pratik",
  email: "pratik@gmail.com",
};

// 11. Record<K, T>: Create object with specified key and value types
type UserRoles = Record<string, number>;
const roles: UserRoles = {
  admin: 1,
  user: 2,
  guest: 3,
};

export {};
