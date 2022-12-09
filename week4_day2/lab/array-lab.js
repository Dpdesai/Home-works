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