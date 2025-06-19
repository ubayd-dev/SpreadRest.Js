//Merge two arrays and sort them in ascending order.

const arr1 = [3, 5, 2];
const arr2 = [7, 1, 4];
// My Code
const mergedArray = [...arr1, ...arr2];
mergedArray.sort(function(a, b){
    return a - b
});
console.log(mergedArray);
// Expected Output: [1, 2, 3, 4, 5, 7]
// -------------------------------------------------------------------------------------------------------------


//Find the maximum and minimum values in an array without using Math.max() or Math.min().
const numbers = [4, 2, 9, 5];
// My Code
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];

for(const num of [...arr]) {
    if(num < min) min =num;
    if(num > max) max = num;
}
return {max , min}
}
const {max , min} = findMaxMin(numbers);
console.log(`max:${max}, min:${min}`);
// Expected Output: { max: 9, min: 2 }
// -------------------------------------------------------------------------------------------------------------


//Merge two objects, but if they have the same property, the second object’s value should override the first.

const defaults = { theme: "light", fontSize: 12 };
const userSettings = { theme: "dark", showSidebar: true };
// My Code
const mergedObject = ({...defaults,...userSettings});
console.log(mergedObject);

// Expected Output: { theme: "dark", fontSize: 12, showSidebar: true }
// -------------------------------------------------------------------------------------------------------------



//Given an object, extract the first property’s value and collect the rest into another object.
const person = { name: "Alice", age: 25, country: "USA" };
// My Code
const {name: first, ...rest} = person
const result = {first, rest}
console.log(result);
// Expected Output: { first: "Alice", rest: { age: 25, country: "USA" } }
// -------------------------------------------------------------------------------------------------------------



//Write a function partialMerge that takes two objects and merges them, but only includes properties present in the first object.
const template = { a: 1, b: 2, c: 3 };
const data = { a: 99, b: 100, d: 200 };
// My Code
function partialMerge(templateObj, dataObj){
    const merged = {...templateObj};
    for(const key of Object.keys(templateObj)){
        if(key in dataObj){
            merged[key] = dataObj[key];
        }
    }
    return merged;
}

const output = partialMerge(template, data);
console.log(output);
// Expected Output: { a: 99, b: 100, c: 3 } (ignores 'd'

