# How does TypeScript help in improving code quality and project maintainability?

Before understanding how TypeScript helps improve code quality and project maintainability, we need to understand what TypeScript is.

Simply put, "TypeScript is JavaScript with syntax for types."

As its name suggests, TypeScript adds support for types where JS failed to do so.

Typescript ensures the type safety of code and enforces putting explicit types.

It allows us to see errors on the fly. No need to wait for to compile the code to see errors.

Also, it's built-in intellisense will suggest code so that we can avoid errors.

In a big project typescript helps us to write clean and predictable codes that behave always the same. This makes maintainability easier.

# Explain the difference between any, unknown, and never types in TypeScript.

1. any Type : Any is a cheat code that allows us to bypass the type safety. It will allow to assign any type of value.

```
let x: any = 'hello';
x = 42;
x = { name: 'Nahid' };
```
This will now trigger any red flag to TypeScript. 

2. unknown Type : The unknown type is kind of similar to any. If we are getting data from a source that we can not verify type we can use unknown. 

3. never Type:  From Typescript hand book we can find the best definition of it . Which is "The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program." Simply we can say that if we are absolutely sure that any function will not return anything then we can use "never" type. Here is an example. 

```
function showAge(age: number): never {
  console.log(`Provided age is ${age}.`);
}
```
