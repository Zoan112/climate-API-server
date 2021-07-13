const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
const fs = require("fs");

require("dotenv/config")
app.use(bodyParser.json());




const postsRoute = require("./Routes/write-to-db");
app.use('/write-to-db', postsRoute);




const zones = require("./Routes/zones");
app.use('/zones', zones)


mongoose.connect(process.env.DB_connection, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("DB connected")
});
//Connecting to DB

const sslServer = https.createServer({
    key: fs.readFileSync(__dirname + '/cert/private.key', 'utf8'),
    cert: fs.readFileSync(__dirname + '/cert/certificate.crt', 'utf8')
},app)
//listning to server

sslServer.listen(3000, () => console.log("secure server"))

///app.listen(3001/*, '192.168.8.248'*/)

const getData = require("./Routes/get");
app.use('/get', getData );