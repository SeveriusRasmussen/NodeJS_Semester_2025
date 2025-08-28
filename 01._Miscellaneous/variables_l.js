// node <file_name> fx. node 01._miscellaneous/variables_l.js

const name = "Søren";
// Man kunne bruge var, let eller const. Men her bruger man const mest, ellers let.


console.log("Hello World", name);
// "Hello World" + name  giver "Hello WorldSøren"

// String literals
const firstGreeting = 'It\'s a nice day today';
const secondGreeting = "It's a nice day today";
// Both single or multi string lines
const thirdGreeting = `It's a nice day 

today`;

// Console.log with `` and name variable
console.log(`Hello ${name}`);
// or adding numbers
console.log(`${2+2}`);

// Data types (Første 7 er primitive og object er ikke-primitive.)
// String, boolean, number, bigint(større end int), undefined, null, symbol, Object

console.log(typeof []); // giver "object" som output

// Javascript Object (IKKE JSON)
const person = {
    name: "Søren" // key-value pair (kan ikke kommenteres i Json-filen!)
};
