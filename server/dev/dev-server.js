const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const server = require('http').Server(app);


app.use(express.static(__dirname));

app.use("/api", bodyParser.json());
app.use("/dist", express.static(__dirname + "/../../dist"));


server.listen(3030, () => {
    console.log(`Server running at:3000` );
});


