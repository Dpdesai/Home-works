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
const eleSeven = (element) => element % 7 === 0;
// console.log(nums.some(eleSeven));

const strA = (element) => element.includes('a');
// console.log(panagram.some(strA));



// Hungry for More

// Reduce
const initialValue = 0;
const total = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
// console.log(total);

const finalStr = panagram.reduce(
  (accumulator, currentValue) => accumulator + ' ' + currentValue
);
// console.log(finalStr);



// Sort

// console.log(nums.sort());
// console.log(panagram.sort());

// console.log(nums.sort((a,b) => a - b)); // ascending 
// console.log(nums.sort((a,b) => b - a)); // descending 

for (let i = 0; i < panagram.length; i++) {
    for (let j = 0; j < panagram.length; j++) {        
        let temp = panagram[i].toLowerCase();
        if (panagram[i] < panagram[j]) {
            panagram[i] = panagram[j];
            panagram[j] = temp;
        }
    }
}
// let wordAscen = panagram.sort(function(a,b){
//     return (a > b ? 1 : -1)
// })
// console.log("Word Ascending order is ", wordAscen);
// Sort the words in descending order

console.log(panagram.sort((a,b) => a > b ? 1 : -1)); // ascending 
console.log(panagram.sort((a,b) => a < b ? 1 : -1)); // descending 


// let wordDesc = panagram.sort(function(a,b){
//     return (a < b ? 1 : -1)
// })
// console.log("Word Descending order is ", wordDesc);