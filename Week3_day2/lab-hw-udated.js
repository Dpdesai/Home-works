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
// console.log(joseCat, rodCat);
// console.log(joseCat.getAge());


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
const pirate1 = new Pirate('Pearl', 3, 'Jack Sparrow', 22);
const pirate2 = new Pirate('Voyager', 5, 'blackbeard', 35);
const pirate3 = new Pirate('Roger', 8, 'brownbeard', 45);
const pirate4 = new Pirate('Pearl1', 6, 'JackSparrow1', 22);
const pirate5 = new Pirate('Voyager1', 9, 'blackbeard1', 35);
const pirate6 = new Pirate('Roger1', 7, 'brownbeard1', 45);
// console.log(jackSparrow.getShip());

const jollyRoger = [pirate1, pirate2, pirate3];
const blackPearl = [pirate4, pirate5, pirate6];

for (let i = 0; i < jollyRoger.length; i++) {
    console.log(`The name is ${jollyRoger[i].getCaptainName()} the ship name is ${jollyRoger[i].getShip()} the number of the crew members is ${jollyRoger[i].getCrew()}`)
}
for (let i = 0; i < blackPearl.length; i++) {
    console.log(`The name is ${blackPearl[i].getCaptainName()} the ship name is ${blackPearl[i].getShip()} the number of the crew members is ${blackPearl[i].getCrew()}`)
}