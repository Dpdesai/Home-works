//Objects

//A. Make a user object

let user = {
    name: 'Jim',
    email: 'abc@gmail.com',
    age: 50,
    purchased: []
}

// B. Update the user
user['name'] = 'jack';
user['email'] = 'xyz@gmail.com';
user['age'] = user.age + 1;

//C. Adding keys and values
user['location'] = 'NJ';

//D. Shopaholic!
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
// console.log(user.purchased[2])
// console.log(user);

//E. Object-within-object

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'NY',
    purchased: []
}
// console.log(user);
// console.log(user.friend.name);
// console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
// console.log(user.friend.purchased[1]);
// console.log(user.friend.age);


// F. Loops
for (let i = 0; i < user.purchased.length; i++) {
    // console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
    // console.log(user.friend.purchased[i]);
}

function updateUser(){
    user.name = user.name.toUpperCase();
    user.age++;
}

// updateUser();
// console.log(user);

const oldAndLoud = (person) => {
    person.name = person.name.toUpperCase();
    person.age++;
}

// oldAndLoud(user);
// console.log(user);


//Cat Combinator
const cat1 = {
    name: "Joe", 
    age: 19, 
    breed: "Mog"
}

// console.log(cat1.age);
// console.log(cat1.breed);

const cat2 = {
    name: "Jam", 
    age: 45, 
    breed: "Siamese"
}

function combineCats(mama,papa){
    // const babyCat = {
    //     name: mama.name + papa.name,
    //     age: 1,
    //     breed: mama.breed + '-' + papa.breed
    // }
    // return babyCat;
    return { 
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + '-' + papa.breed
    }
}

// console.log(combineCats(cat1,cat2));
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(
    combineCats(
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
        combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
    )
);

