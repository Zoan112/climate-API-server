const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
require("dotenv/config")

app.use(bodyParser.json());


const postsRoute = require("./Routes/write-to-db");
app.use('/write-to-db', postsRoute);


mongoose.connect(process.env.DB_connection, {useNewUrlParser: true}, ()=>{
    console.log("DB connected")
});
//Connecting to DB

//listning to server
app.listen(3001)