const express = require("express");
const app = express();
// const app = require("express")();

// console.log(app);

// Get metoder:
    // Callback function
    // Endpoint
// route (handler)
app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>
        <h3>Welcome to my page</h3>`);
});
// req = request og res = response
app.get("/planets", (req, res) => {
    res.send({ name: "Jupiter"})
});

// Task: createt /planets/favoritePlanet that returns your favorite planet
app.get("/planets/favoritePlanet", (req, res) => {
    res.send({ name: "Saturn", favoriteReason: "That is a wonderful Planet!"})
});


// How to send data in the get metode.
app.get("/waterfalls/:likingScore", (req, res) => {
    console.log(req.params);
    // respond with "You like waterfalls this much: likingScore"
    res.send(`You like waterfalls this much: ${req.params.likingScore}`);
})

// Task create a bag route that can take two path variables
//  where the client can define what should go in it
// then respond with what the bag contains.

// Developer Port (8080 er TOMCAT)
app.listen(8080);
