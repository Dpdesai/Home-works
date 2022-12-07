// Chef Make Dinners
class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    newDinner(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert);
    }
}

const dinner1 = new Chef().newDinner('appetizer1', 'entree1', 'dessert1');
const dinner2 = new Chef().newDinner('appetizer2', 'entree2', 'dessert2');
const dinner3 = new Chef().newDinner('appetizer3', 'entree3', 'dessert3');

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);