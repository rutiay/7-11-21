const express = require("express"),
app = express(),
PORT = 8080;

app.get('*', (req, res) => {
    res.send("Welcome")
})

app.listen(PORT, () => {
    console.log(`The app is listening to port: ${PORT}`);
})