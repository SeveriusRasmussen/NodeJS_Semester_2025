// Hoisting
//console.log(getRandomInt(5, 10));

// Normal function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
// Anonymous Function
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};
// Arrow Function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

//console.log(getRandomIntArrowFunction) // får kun navnet på function i [].

// Action = Callback function, name = parameter givet til action.
// A function that is passed as an arguement to another function
// and only potentially invoked laterx
function genericActionPerformer(name, action) {
    return action(name);
};

function cookingAction(name) {
    return `${name} enjoys cooking.`;
}

// task using the genericActionPerformer, console.log "Jens enjoys cooking"
// Task do it in one line below, don't change anything above.

console.log(genericActionPerformer("Jens", cookingAction));

// Using an arrow function below, console.log Marco loves to run!
const runningAction = (name) => {
    return `${name} enjoys running.`;
}

console.log(genericActionPerformer("Søren", runningAction));

// Task in a single line below write "Lucas likes asking questions"
console.log(genericActionPerformer("Lucas", (name) => `${name} likes asking Question!`));



