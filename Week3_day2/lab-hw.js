class Cat {
    constructor(color, name, age) {
        this.color = color;
        this.name = name;
        this.age = age;
    }
    getColor() {
        return `The color of the cat is ${this.color}`
    }
    getName() {
        return `The name of the cat is ${this.name}`
    }
    getAge() {
        return `The age of the cat is ${this.age}`
    }
}
const joseCat = new Cat('brown', 'Gizmo', 7)
const rodCat = new Cat('Red', 'Chimy', 4)
console.log(joseCat, rodCat);
console.log(joseCat.getAge());
class Pirate {
    constructor(Ship, Maps, captainName, Crew) {
        this.Ship = Ship;
        this.Maps = Maps;
        this.CaptainName = captainName;
        this.Crew = Crew;
    }
    getShip() {
        return this.Ship;
    }
    getMaps() {
        return this.Maps;
    }
    getCaptainName() {
        return this.CaptainName;
    }
    getCrew() {
        return this.Crew;
    }
}
const jackSparrow = new Pirate('Pearl', 3, 'Jack Sparrow', 22)
console.log(jackSparrow.getShip());
const blackPearl = new Pirate('Voyager', 5, 'blackbeard', 35)
let pirateNames1 = ['Rodger', 'Blackbeard', 'Brownbeard'];
let pirateNames2 = ['Jollybeard', 'Ahoy', 'Crackers'];
for (let i = 0; i < pirateNames1.length; i++) {
    console.log(`The name is ${pirateNames1[i]} the ship name is ${jackSparrow.getShip()} the number of the crew members is ${jackSparrow.getCrew()}`)
}
for (let i = 0; i < pirateNames2.length; i++) {
    console.log(`The name is ${pirateNames2[i]} the ship name is ${blackPearl.getShip()} the number of the crew members is ${blackPearl.getCrew()}`)
}