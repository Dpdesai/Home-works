// Write a while loop for the given output(odd / even)

let odd = [];
let even = [];

let x = 1;
while (x <= 10) {
    if (x % 2 !== 0) {
        odd.push(x * 10);
    }
    if (x % 2 == 0) {
        even.push(x * 10);
    }
    x++;
}

console.log(odd);
console.log(even);

//Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.
let i = 500;
while (i >= 500 && i <= 800) {
    if (i % 4 == 0) {
        console.log(i);
    }
    i++;
}


// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz",
// for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
let numbers = []
let y = 1;
while (y <= 100) {
    if (y % 3 == 0 && y % 5 !== 0) {
        numbers.push("Fizz");
    } else if (y % 5 == 0 && y % 3 !== 0) {
        numbers.push("Buzz");
    } else if (y % 3 == 0 && y % 5 == 0) {
        numbers.push("FizzBuzz");
    }
    else {
        numbers.push(y);
    }
    y++;
}

console.log(numbers);