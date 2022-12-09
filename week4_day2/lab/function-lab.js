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


