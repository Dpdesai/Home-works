////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    // console.log(i);
}


////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}


////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
        // console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 != 0) {
        // console.log('Buzz');
    } else if (i % 5 === 0 && i % 3 === 0) {
        // console.log('FizzBuzz');
    } else {
        // console.log(i);
    }
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = plantee[2] + 1;
wolfy[3] = 'Gotham City';
const indexHometown = dart.indexOf('Upside Down');
dart[indexHometown] = ['Upside Down', 'Hawkins'];
wolfy.splice(0, 1, 'Gameboy');

// console.log(wolfy);
// console.log(plantee);
// console.log(dart);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (const element of ninjaTurtles) {
    // console.log(element.toUpperCase());
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf('Titanic'));
// favMovies.sort();
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar');
const slicedArray = favMovies.length / 2;
const newFavMovies = favMovies.slice(slicedArray, favMovies.length);
// console.log(newFavMovies);
// console.log(favMovies.indexOf('Fast and Furious'));
// console.log(favMovies);


////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = 'No One';
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
// Excited Kitten
////////////////////////////////

let tempArray = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        // console.log(tempArray[Math.floor(Math.random() * tempArray.length)]);
    } else {
        // console.log('Love me, pet me! HSSSSSS');
    }
}

////////////////////////////////
// Find the Median
////////////////////////////////
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

function median(array) {
    const mid = Math.floor(array.length / 2),
        nums1 = nums.sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums1[mid] : (nums1[mid - 1] + nums1[mid]) / 2;
}

// console.log(median(nums));


////////////////////////////////
// Fibonnacci
////////////////////////////////
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let fib = [];
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        fib.push(sum);
        num1 = num2;
        num2 = sum;
    }
    // console.log(fib);
    // console.log(num2);
}

fibonacci(5);


////////////////////////////////
// Checkerboard
////////////////////////////////


let height = 4;
let width = 5;
let board = "";
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (j == width - 1) {
            board += "\n";
        } else if ((j + i) % 2 == 0) {
            board += "*";
        }
        else {
            board += "#";
        }
    }
}

console.log(board);



////////////////////////////////
// TwoDArray
////////////////////////////////
let newArray = new Array(4);
for (let i = 0; i < newArray.length; i++) {
    newArray[i] = new Array(4);
}
// console.log(newArray);


////////////////////////////////
// Return of the Closets
////////////////////////////////
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
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
// console.log(kristynsCloset);
// console.log(thomsCloset);

for (let i = 0; i < 3; i++) {
    // console.log("we'll be wearing " + kristynsCloset[i] + " ," + thomsCloset[i][i] + ".");
}

for (let i = 0; i < kristynsCloset.length; i++) {
    // console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

for (let i = 0; i < thomsCloset.length; i++) {
    for (let j = 0; j < thomsCloset[i].length; j++) {
        // console.log(thomsCloset[i][j]);
    }
}