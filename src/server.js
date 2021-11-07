const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.get('*', (req, res) => {
    res.send("Welcome")
})

app.listen(PORT, () => {
    console.log(`The app is listening to port: ${PORT}`);
})