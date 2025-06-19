//Merge two arrays and sort them in ascending order.

const arr1 = [3, 5, 2];
const arr2 = [7, 1, 4];

// Expected Output: [1, 2, 3, 4, 5, 7]

//Find the maximum and minimum values in an array without using Math.max() or Math.min().
const numbers = [4, 2, 9, 5];
// Expected Output: { max: 9, min: 2 }


//Merge two objects, but if they have the same property, the second object’s value should override the first.

const defaults = { theme: "light", fontSize: 12 };
const userSettings = { theme: "dark", showSidebar: true };
// Expected Output: { theme: "dark", fontSize: 12, showSidebar: true }

//Given an object, extract the first property’s value and collect the rest into another object.
const person = { name: "Alice", age: 25, country: "USA" };
// Expected Output: { first: "Alice", rest: { age: 25, country: "USA" } }

//Write a function partialMerge that takes two objects and merges them, but only includes properties present in the first object.
const template = { a: 1, b: 2, c: 3 };
const data = { a: 99, b: 100, d: 200 };
// Expected Output: { a: 99, b: 100, c: 3 } (ignores 'd'