// Creating Classes & Factories

// Hamster
class Hamster {
    constructor(name) {
        this.name = name;
        this.owner = '';
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');  
    }
    getPrice() {
        return this.price;
    }
}

const hamster1 = new Hamster('Biscuit');
const hamster2 = new Hamster('Bunny');
// console.log(hamster1.getPrice());

//Person
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age || 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name; 
    }
    getAge() {
        return this.age; 
    }
    getWeight() {
        return this.weight; 
    }
    greet() {
        console.log(`hello ${this.name}`);
    }
    eat() {
        this.weight++; 
        this.mood++;
    }
    exercise() {
        this.weight-- ;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);   
        this.mood += 10;
        this.bankAccount = this.bankAccount - hamster.getPrice();
    }
}

const person1 = new Person('Jim');

// console.log(person1);
// person1.buyHamster(hamster1);
// person1.buyHamster(hamster2);
// console.log(person1.hamsters);

const timmy = new Person('Timmy', 5);
for(let i = 0; i < 5; i++) {
    timmy.eat();
}

for(let i = 0; i < 5; i++) {
    timmy.exercise();
}

console.log(timmy);

// Increasing Timmy's age to 9
timmy.age = 9;
console.log(timmy);
const gus = new Hamster('Gus');
gus.owner = 'Timmy';
timmy.buyHamster(gus);
console.log(timmy);


// Increasing Timmy's age to 15
timmy.age = 15;
for(let i = 0; i < 2; i++) {
    timmy.eat();
}

for(let i = 0; i < 2; i++) {
    timmy.exercise();
}
console.log(timmy);



// Chef Make Dinners
class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    newDinner(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert);
    }
}

const dinner1 = new Chef().newDinner('appetizer1', 'entree1', 'dessert1');
const dinner2 = new Chef().newDinner('appetizer2', 'entree2', 'dessert2');
const dinner3 = new Chef().newDinner('appetizer3', 'entree3', 'dessert3');

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);


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

// A. The basics

for (let i = 0; i <= 10; i++) {
    //console.log(i);
}

for (let i = 10; i <= 400; i++) {
    //console.log(i);
}

for (let i = 12; i <= 4000; i++) {
    if (i % 3 == 0) {
        // console.log(i);
    }
}


//B. Get even
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(i + ' <-- is an even number');
    }
    else {
        // console.log(i);
    }
}


//C. Give me Five
for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 !== 0 ) {
        // console.log('I found a ' + i + '. High five!');
    } else if (i % 3 == 0 && i % 5 !== 0) {
        // console.log('I found a ' + i + '. Three is a crowd');
    } else if (i % 3 == 0 && i % 5 == 0) {
        // console.log('I found a ' + i + '. dividible by both');
    } 
}


//D. Savings account

let bank_account = 0;
for(let i = 1; i <= 10; i++) {
    bank_account = bank_account + i;
}

console.log(bank_account);

bank_account = 0;
for(let i = 1; i <= 100; i++) {
    bank_account = bank_account + i * 2;
}

console.log(bank_account);


// III. Arrays & Control flow
let quotes = ['go with flow!', 'be nice!', 'be happy!'];



// Accessing elements
const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);
randomThings[2] = 'World';
// console.log(randomThings);



// Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2]);
ourClass[4] = 'Octocat';
ourClass.push("Cloud City");
// console.log(ourClass);



// Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push('Aegon');
myArray.push('test');
myArray.shift();
myArray.unshift('Bob Marley');
myArray.pop();
myArray.reverse();
// console.log(myArray);



// Biggie Smalls
let num = 50;
if (num >= 100) {
    // console.log('big number');
} else {
    // console.log('little number');
}



// Monkey in the Middle
let num1 = 7;
if (num1 < 5) {
    console.log('little number');
} else if (num1 > 10) {
    // console.log('big number');
} else {
    // console.log('monkey');
}



// What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
kristynsCloset.splice(6, 0, 'raybans');
kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][0]);
// console.log(thomsCloset[2][0]);
console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1]);
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);

//IV. Functions

//A. printGreeting
function printGreeting(name) {
    return `Hello there ${name}`;
}
// console.log(printGreeting('Slimer'));



//B. printCool
function printCool(name) {
    return `${name} is cool`;
}
// console.log(printCool('Captain Reynolds'));



//C. calculateCube
function calculateCube(num) {
    return num * num * num;
}
// console.log(calculateCube(5));



//D. isVowel
function isVowel(str) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str);
    // let vowels = ['a', 'e', 'i', 'o', 'u'];
    // if (vowels.includes(str)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
// console.log(isVowel('a'));


function isVowel(str) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str);
    // let vowels = ['a', 'e', 'i', 'o', 'u'];
    // if (vowels.includes(str)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
// console.log(isVowel('a'));

//E. getTwoLengths
function getTwoLengths(str1, str2) {
    let c = [];
    c.push(str1.length, str2.length);
    return c;
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));



//F. getMultipleLengths
function getMultipleLengths(array) {
    let test = [];
    for (let i = 0; i < array.length; i++) {
        test.push(array[i].length);
    }
    return test;
}
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



//G. maxOfThree
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (a < b && b > c) {
        return b;
    } else {
        return c;
    }
}
// console.log(maxOfThree(6, 9, 1));

// function maxOfMul(array){
//     let max = 0;
//     for(let i = 0; i < array.length;i++){
//         if(array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maxOfMul([9, 9, 1]));



//H. printLongestWord
function printLongestWord(array) {
    let longestWord = 0;
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        let placeholder = array[i].length;
        if (placeholder > longestWord) {
            maxValue = array[i];
            longestWord = placeholder;
        }
    }
    return maxValue;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//Objects

//A. Make a user object

let user = {
    name: 'Jim',
    email: 'abc@gmail.com',
    age: 50,
    purchased: []
}

// B. Update the user
user.name = 'jack';
user.email = 'xyz@gmail.com';
user.age = user.age + 1;
// console.log(user);

//C. Adding keys and values
user['location'] = 'NJ';

//D. Shopaholic!
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
// console.log(user.purchased[2])
// console.log(user);

//E. Object-within-object

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'NY',
    purchased: []
}
// console.log(user);
// console.log(user.friend.name);
// console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
// console.log(user.friend.purchased[1]);
// console.log(user.friend.age);


// F. Loops
for (let i = 0; i < user.purchased.length; i++) {
    // console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
    // console.log(user.friend.purchased[i]);
}

function updateUser(){
    user.name = user.name.toUpperCase();
    user.age++;
}

// updateUser();
// console.log(user);

const oldAndLoud = (person) => {
    person.name = person.name.toUpperCase();
    person.age++;
}

// oldAndLoud(user);
// console.log(user);


//Cat Combinator
const cat1 = {
    name: "Joe", 
    age: 19, 
    breed: "Mog"
}

// console.log(cat1.age);
// console.log(cat1.breed);

const cat2 = {
    name: "Jam", 
    age: 45, 
    breed: "Siamese"
}

function combineCats(mama,papa){
    // const babyCat = {
    //     name: mama.name + papa.name,
    //     age: 1,
    //     breed: mama.breed + '-' + papa.breed
    // }
    // return babyCat;
    return { 
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + '-' + papa.breed
    }
}

// console.log(combineCats(cat1,cat2));
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(
    combineCats(
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
    )
);

