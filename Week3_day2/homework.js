class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    getName() {
        return `The name of cat is ${this.name}`;
    }
    getColor() {
        return `The name of cat is ${this.color}`;
    }
    getBreed() {
        return `The name of cat is ${this.breed}`;
    }
}

const cat1 = new Cat('Minnie', 'brown', 'American curl');
const cat2 = new Cat('Bella', 'white', 'American Shorthair');

// console.log(cat1);
// console.log(cat2);

// console.log(cat1.getName());
// console.log(cat1.getColor());
// console.log(cat1.getBreed());
// console.log(cat2.getName());
// console.log(cat2.getColor());
// console.log(cat2.getBreed());


class Pirate {
    constructor(ship, sea, captainName) {
        this.ship = ship;
        this.sea = sea;
        this.captainName = captainName;
    }
    getShip() {
        return this.ship;
    }
    getSea() {
        return this.sea;
    }
    getCaptainName() {
        return this.captainName;
    }
    getPiratesDetails() {
        let pirates1 = ['jackSparrow', 'Will Turner', 'Anamaria'];
        let pirates2 = ['blackPearl', 'Barnacle', 'Dying Gull'];
        
        for (let i = 0; i < pirates1.length; i++) {
            console.log(`The Pirate name is ${pirates1[i]} and the ship is ${jollyRoger.getShip()}`);
        }
    }
}


const jollyRoger = new Pirate('blackPerl', 'caribbean sea', 'jackSparrow');
const blackPearl = new Pirate('Pearl', 'sea', 'blackBeard');

// console.log(jollyRoger);
// console.log(jollyRoger.getShip());
console.log(jollyRoger.getPiratesDetails());


// let pirates1 = ['jackSparrow', 'Will Turner', 'Anamaria'];
// let pirates2 = ['blackPearl', 'Barnacle', 'Dying Gull'];

// for (let i = 0; i < pirates1.length; i++) {
//     console.log(`The Pirate name is ${pirates1[i]} and the ship is ${jollyRoger.getShip()}`);
// }
// for (let j = 0; j < pirates2.length; j++) {
//     console.log(`The Pirate name is ${pirates2[j]} and the ship is ${blackPearl.getShip()}`);
// }