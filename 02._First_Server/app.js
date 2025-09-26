const express = require("express");
const app = express();
// const app = require("express")();


// Sets up body parsing
app.use(express.json());


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


// Assignment create a GET /url route
// Create a query string with the length of "medium" 
// and spiciness level of 6
// urls?length=medium&spiciness=6
app.get("/urls", (req, res) => {
    console.log(req.query);
    res.send({ data :  req.query });
})

app.post("/subjects", (req, res) => {
    console.log(req.body);
    res.send({ data : req.body});
});

//app.get(`hello/?/${name}/${person}`)

//_________________________________________________________
// Til at hente index.html filen
console.log("dir Name: " + __dirname)

app.get("/fashionbrands", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// task create a POST fashion brands and try sending a new fashion brand
// Det er om hvordan man tester endpoint (Når det er lavet.)
app.post("/fashionbrands", (req, res) => {
    console.log(req.body);
    res.send({ data : req.body });
})
//__________________________________________________________

//Http Developer Port
app.listen(8080);
