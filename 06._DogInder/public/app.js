import express from 'express';
import path from 'path'


const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontend/index.html'));
});



const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});