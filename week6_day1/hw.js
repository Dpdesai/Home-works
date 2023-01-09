// arrays_w_callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


// Every
nums.forEach(element => {
    if (element >= 0) {
        console.log(element);
    }
});

panagram.forEach(element => {
    if (element.length < 8) {
        console.log(element);
    }
});



// Filter
const result = nums.filter(nums => nums < 4);
console.log(result);

const resultWord = panagram.filter(panagram => panagram.length % 2 === 0);
console.log(resultWord);



// Find  
const firstNum = nums.find(element => element % 5 === 0);
console.log(firstNum);

const firstWord = panagram.find(element => element.length > 5);
console.log(firstWord);



// Find Index 
const firstNumIndex = nums.findIndex(element => element % 3 === 0);
console.log(firstNumIndex);

const firstWordIndex = panagram.findIndex(element => element.length < 2);
console.log(firstWordIndex);



// For Each
nums.forEach(element => {
    console.log(element * 3);
});

panagram.forEach(element => {
    console.log(`${element}!`);
});



// Map
const mapNum = nums.map(x => x * 100);
console.log(mapNum);

const mapPanagram = panagram.map(x => x.toUpperCase());
console.log(mapPanagram);



// Some
const eleSeven = (element) => element % 7 === 0;
console.log(nums.some(eleSeven));

const strA = (element) => element.includes('a');
console.log(panagram.some(strA));



// Hungry for More

// Reduce
const sum = 0;
const total = nums.reduce(
    (firstNum, secondNum) => firstNum + secondNum,
    sum
);
console.log(total);

const finalStr = panagram.reduce(
    (firstStr, secondStr) => firstStr + ' ' + secondStr
);
console.log(finalStr);



// Sort

console.log(nums.sort());
console.log(panagram.sort());

console.log(nums.sort((a,b) => a - b)); // ascending 
console.log(nums.sort((a,b) => b - a)); // descending 


console.log(panagram.sort((a, b) => a > b ? 1 : -1)); // ascending 
console.log(panagram.sort((a, b) => a < b ? 1 : -1)); // descending 



// Array Methods Challenge Problems

// Working with data

const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]

products.forEach(element => {
    if(element.price < 10) {
        console.log(element);
    }
});

console.log(products.sort((a,b) => (a.name > b.name) ? 1 : -1));