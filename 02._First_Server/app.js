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
        <h3>Welcome to my awesome page</h3>`);
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
// "/urls?length=medium&spiciness=6" som eks.
app.get("/urls", (req, res) => {
    console.log(req.query);
    res.send({ data :  req.query });
})

// Brug POSTMAN til post method. body -> raw -> Json
app.post("/subjects", (req, res) => {
    console.log(req.body);
    res.send({ data : req.body });
});
// kode 200 er godkendt.

//_________________________________________________________
// Til at hente index.html filen
console.log("dir Name: " + __dirname)

app.get("/fashionbrands", (req, res) => {
    //vises i console, adressen til filen.
    res.sendFile(__dirname + "/index.html");
});

// task create a POST fashion brands and try sending a new fashion brand
// Det er om hvordan man tester endpoint (Når det er lavet.)
app.post("/fashionbrands", (req, res) => {
    console.log(req.body);
    res.send({ data : req.body });
})
// som i subjects endpoint.

// send noget, så se i browser med get-method
const comics = []; // lille "database" i hukommelsen
// Fjernet når man lukker programmet. 
// Brug MySQL hvis vil have at disse data bliver gemt.

//Get method
app.get("/comics", (req, res) => {
    res.json(comics);
});
// Dette får man alt comics

//Post method (req = require, res = response)
app.post("/comics", (req, res) => {
    comics.push(req.body);
    res.status(201).json({ data: req.body });
});

//__________________________________________________________

//Http Developer Port
app.listen(8080);
