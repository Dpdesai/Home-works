// Hamster
class Hamster {
    constructor(name) {
        this.name = name;
        this.owner = '';
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');  
    }
    getPrice() {
        return this.price;
    }
}

const hamster1 = new Hamster('Biscuit');
const hamster2 = new Hamster('Bunny');
// console.log(hamster1.getPrice());

//Person
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age || 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name; 
    }
    getAge() {
        return this.age; 
    }
    getWeight() {
        return this.weight; 
    }
    greet() {
        console.log(`hello ${this.name}`);
    }
    eat() {
        this.weight++; 
        this.mood++;
    }
    exercise() {
        this.weight-- ;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);   
        this.mood += 10;
        this.bankAccount = this.bankAccount - hamster.getPrice();
    }
}

const person1 = new Person('Jim');

// console.log(person1);
// person1.buyHamster(hamster1);
// person1.buyHamster(hamster2);
// console.log(person1.hamsters);

const timmy = new Person('Timmy', 5);
for(let i = 0; i < 5; i++) {
    timmy.eat();
}

for(let i = 0; i < 5; i++) {
    timmy.exercise();
}

console.log(timmy);

// Increasing Timmy's age to 9
timmy.age = 9;
console.log(timmy);
const gus = new Hamster('Gus');
gus.owner = 'Timmy';
timmy.buyHamster(gus);
console.log(timmy);


// Increasing Timmy's age to 15
timmy.age = 15;
for(let i = 0; i < 2; i++) {
    timmy.eat();
}

for(let i = 0; i < 2; i++) {
    timmy.exercise();
}
console.log(timmy);