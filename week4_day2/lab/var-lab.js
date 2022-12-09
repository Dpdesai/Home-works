// I. Variables & Datatypes


// Q + A

/*
1. How do we assign a value to a variable? A. With the assignment operator like let a = 2;
2. How do we change the value of a variable? A. With the assignment operator like a = 5;
3. How do we assign an existing variable to a new variable? A. With the assignment operator like let b = a;
4. Remind me, what are declare, assign, and define?
    A.  Declare : Creating a variable
        Assign : assiging a specific value to a variable;
        Define : Declaring a variable with keyword like var , let or const
5. What is pseudocoding and why should you do it?
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. 60%
*/


// Strings

/*
1.Create a variable called firstVariable
2.Assign it the value of the string "Hello World"
3.Change the value of this variable to some number
4.Store the value of firstVariablein a new variable called secondVariable
5.Change the value of secondVariableto any string.
6.What is the value of firstVariable?
7.Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/

let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
secondVariable = 'This is second var';
let yourName = 'Divya';
// console.log(secondVariable);
// console.log('Hello, my name is ' + yourName);


// Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false);
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');



// The farm

let animal = 'dog'; // 'cow'

if (animal === 'cow') {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}



// Driver's Ed

let personAge = 14; // 20

if (personAge >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}