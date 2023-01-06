// arrays_w_callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


// Every
nums.forEach(element => {
    if(element >= 0) {
        // console.log(element);
    }
});

panagram.forEach(element => {
    if(element.length < 8) {
        // console.log(element);
    }
});



// Filter
const result = nums.filter(nums => nums < 4);
// console.log(result);

const resultWord = panagram.filter(panagram => panagram.length % 2 === 0);
// console.log(resultWord);



// Find  
const firstNum = nums.find(element => element % 5 === 0);
// console.log(firstNum);

const firstWord = panagram.find(element => element.length > 5);
// console.log(firstWord);



// Find Index 
const firstNumIndex = nums.findIndex(element => element % 3 === 0);
// console.log(firstNumIndex);

const firstWordIndex = panagram.findIndex(element => element.length < 2);
// console.log(firstWordIndex);



// For Each
nums.forEach(element => {
    // console.log(element * 3);
});

panagram.forEach(element => {
    // console.log(`${element}!`);
});



// Map
const mapNum = nums.map(x => x * 100);
// console.log(mapNum);

const mapPanagram = panagram.map(x => x.toUpperCase());
// console.log(mapPanagram);



// Some
nums.forEach(element => {
    if(element % 7 === 0) {
        // console.log(element);
    }
});

panagram.forEach(element => {
    if(element.includes('a')) {
        // console.log(element);
    }
});
