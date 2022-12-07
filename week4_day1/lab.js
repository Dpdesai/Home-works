// Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.
const minusOne = (num) => {
    return num = num -1;
}

console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));


// Write a function makeSentencethat takes three parameters and concatenates them into a fully formed sentence.
function makeSentence(str1,str2,str3){
    return `Oh boy, do ${str1} ${str2} ${str3} or what?`;
}

console.log(makeSentence('I', 'want', 'chimichangas'));


//Invoke the function with an array as the argument.
function getLastElement(array){
    return array[array.length - 1];
}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));
console.log(getLastElement(['a', 'b', 'c']));
console.log(getLastElement([[1, 2, 3], [4, 5, 6]]));