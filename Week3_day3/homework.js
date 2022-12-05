class Governor {
    constructor(name, party, age) {
        this.name = name;
        this.party = party;
        this.age = age;
    }
    static partyType() {
        return ['democrate', 'republican', 'other'];
    }
}

console.log(Governor.partyType()[2]);


class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getName() {
        return `The person name is ${this.name}`;
    }
    getAge() {
        return `The person age is ${this.age}`;
    }
    getHeight() {
        return `The person height is ${this.height}`;
    }
}

class PostalWorker extends Person {
    steal() {
        console.log('lets get away!');
    }
}

class Chef extends Person {
    cuisine() {
        console.log('Some delicious cuisine!');
    }
}

const jack = new PostalWorker('jim', 30, 120);
const jhon = new PostalWorker('jam', 40, 125);
console.log(jack);
jack.steal();


const bobby = new Chef('bob', 25, 130);
const jj = new Chef('jnj', 35, 140);
console.log(jj);
jj.cuisine();
console.log(bobby.getAge());


class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit() {
        return `The amount has been deposited into account ${this.acctNum}`;
    }
    withdraw() {
        return `The amount withdrawn from account ${this.acctNum}`;
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw() {
        console.log('Override withdrawto implement overdraft feature');
    }
}

class SavingsAccount extends BankAccount {
    withdraw() {
        console.log('Override withdraw to disallow withdrawals completely');
    }
}

const customer1 = new CheckingAccount('Jim', 25000, 3210233562, true);
const customer2 = new SavingsAccount('Jack', 250000, 3210233563);
console.log(customer1);
console.log(customer2);

customer1.withdraw();
customer2.withdraw();