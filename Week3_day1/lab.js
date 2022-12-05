/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

//Your solution for 01-addList here:

// function addList(num1, num2){
//     return num1 + num2;
// }

// console.log(addList(1, 0));

// console.log(addList(7,-12));

// //Arrow function
// let addList1 = (num1, num2, num3) => num1 + num2 + num3;

// console.log(addList1(1,50,1.23));

// Rest parameter function
function addList(...nums) {
    let total = 0;
    for (let arg of nums) {
        total += arg;
    }
    return total;
}
console.log(addList(1, 0));
console.log(addList(7, -12));
console.log(addList(1, 50, 1.23));
console.log(addList());


// let addList = a.forEach(function(nums) {
//     let total = 0;
//     for (let i=0; i<nums.lenght; i++) {
//         total += nums;
//     }
//     return total;
// });

// console.log(addList(1, 0));
