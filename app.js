const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require('cors');

require("dotenv/config")
app.use(bodyParser.json());




const postsRoute = require("./Routes/write-to-db");
app.use('/write-to-db', postsRoute);

//Connecting to DB
mongoose.connect(process.env.DB_connection, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("DB connected")
});



//SSL
const sslServer = https.createServer({
    key: fs.readFileSync(__dirname + '/cert/private.key', 'utf8'),
    cert: fs.readFileSync(__dirname + '/cert/certificate.crt', 'utf8')
},app)
//listning to server

sslServer.listen(3000, () => console.log("secure server"))

const zones = require("./Routes/zones");
app.use('/zones', zones);