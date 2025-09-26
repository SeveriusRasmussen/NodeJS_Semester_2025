const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Hello Greek Gods!</h1>
        <h3>Welcome to my page about Greek Gods!</h3>`);
});

// Dummy in-memory data of gods
// array med objekter.
const greekGods = [
    { id: 1, name: "Zeus", domain: "Sky", symbol: "Thunderbolt"},
    { id: 2, name: "Hera", domain: "Marriage", symbol: "Peacock"},
    { id: 3, name: "Poseidon", domain: "Sea", symbol: "Trident"},
    { id: 4, name: "Hades", domain: "Underworld", symbol: "Cerberus" },
    { id: 5, name: "Aphrodite", domain: "Love and Beauty", symbol: "Dove" }
];

// Get all gods and shows as JSON data
// IKKE GODT, pga. regler i forhold til Anders. 
// Også "res.json" giver ikke mening. GraphQL eller noget.
/*
app.get("/greekgods", (req, res) => {
    res.json(greekgods);
});
*/

// det her er godt! Af Anders
app.get("/greekgods", (req, res) => {
    res.send({ data: greekGods});
});

// Get one of the gods by id and shows as JSON data
app.get("/greekgods/:id", (req, res) => {
    // id herunder tager parameter ":id"
    const providedGreekId = Number(req.params.id);
    // chosenGod herunder tjekker om guden findes.
    const chosenGod = greekGods.find((greekGod) => greekGod.id === providedGreekId);
    // Hvis ikke fundet, så vises JSON med fejl-meddelelsen.
    if (!chosenGod) {
        return res.status(404).send({ errorMessage: `God not found by id ${providedGreekId}`});
    } else {
        res.send({ data : chosenGod});
    }
});

//TODO: POST, PUT, PATCH, DELETE, DELETE ALL (Bad idea).
//app.post("/greekgods", )


// HTTP development port = 8080
app.listen(8080);