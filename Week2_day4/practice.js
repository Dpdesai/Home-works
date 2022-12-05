// let bobsFollowers = ['Jhon', 'Gig', 'Jerry', 'Jim'];
// let tinasFollowers = ['Nik', 'Gig', 'Jerry'];
// let mutualFollowers = [];

// for (let x = 0; x < bobsFollowers.length; x++){
//   for (let y = 0; y < tinasFollowers.length; y++){
//     if(bobsFollowers[x] === tinasFollowers[y]){
//       mutualFollowers.push(bobsFollowers[x]);
//     }
//   }
// }

// console.log(mutualFollowers);



let userName = '';
const userQuestion = 'what is Magic Eight Ball?';

let randomNumber = Math.floor(Math.random() * 8);

let eightBall =
    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(userQuestion);
console.log(randomNumber);

randomNumber === 0 ? eightBall : console.log('Hello!');

switch (eightBall) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
    default: 
        console.log('default case');
        break;
}

console.log(eightBall);