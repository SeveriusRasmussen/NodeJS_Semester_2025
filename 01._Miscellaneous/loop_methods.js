// .forEach .filter .map .reduce .find .indexOf
// use loop methods unless you finger count

// .forEach loops through the entire list ut does not retunr a new array,
// use it when you don't care about hte values afterwards

// .filter creates a new array either 1:1 or less than the amount of element

// map returns a new list 1:1

// assignment: double the numbers above


const numbers = [1, 2, 3, 4, 5]


/*numbers.forEach(number => {
    number * 2
});*/

const doubledNumbers = numbers.map((number) => number *2);

const desserts =[
    {
        name: "flan",
        weightGram: 200
    },
    {
        name: "banana spilt",
        weightGram: 700
    },
    {
        name: "brownie",
        weightGram: 600
    }
];

console.log(desserts);
// assignment make all desserts weight 400 gram extra except for "brownie"

// Herunder kommentar viser alle med +400 gram.
//const extraGram = desserts.map((dessert) => dessert.weightGram += 400);
//console.log(extraGram);

const biggerPortionedDesserts = desserts.map((dessert) => {
    if (dessert.name !== "brownie") {
        dessert.weightGram += 400;
    }
    return dessert;
});

console.log(biggerPortionedDesserts);



numbers.map((element, index, array) => console.log(element, index, array));

