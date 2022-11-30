//CSXPrecourse - Part 2Challenge: While Loops - Conditional Expression
// ADD CODE HERE
let addThis = 0;
let sum = 0;
while(addThis < 10){
  console.log(addThis);
  sum = sum + addThis;
  addThis++;
}

console.log(sum);


//Challenge: Control Flow - if statements
const num = 40;
let final;
// ADD CODE HERE
let x = 0;

while(x < 100) {
  if(num > 100){
    final = null;
  }
  else{
    final = num*2;
  }
  x++;
}

// Log final to the console below to check your work
console.log(final);


// Challenge: Fizzbuzz/Fizzbuzz Solution
const fb = [];
// ADD CODE HERE
let y = 1;
while (y <= 16) {
    if (y % 3 == 0 && y % 5 !== 0) {
        fb.push("fizz");
    } else if (y % 5 == 0 && y % 3 !== 0) {
        fb.push("buzz");
    } else if (y % 3 == 0 && y % 5 == 0) {
        fb.push("fizzbuzz");
    }
    else {
        fb.push(y);
    }
    y++;
}

console.log(fb);