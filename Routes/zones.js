const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const mongoose = require("mongoose");


/*Show all zones */


router.get('/',async (req, res)=>{

  //  res.send("hello");
    /*
    try{ 
       const results = await Post.db();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }

*/

mongoose.connection.db.listCollections().toArray((err, names)=>{
    console.log("karmab");
    console.log(names);
    console.log(names[0].name);
    console.log(names[1].name);

    let zones = [];
  
    
    names.forEach((n)=>{
        console.log("--->>", n.name);
       zones.push(n.name);
    })

   
    res.send('avaliable zones: ' + zones);
    console.log(zones);

   // res.send(names[0].name+names[1].name);
  



})

/*
mongoose.connection.db.listCollections().toArray(function(err, names) {
    //console.log(names);
   // res.send(names[0].name);
    if (err) {
        console.log(err);
    }
    else {
        names.forEach(function(e,i,a) {
            //mongoose.connection.db.dropCollection(e.name);
            console.log('e',e);
           // console.log("--->>", e.name);
           // res.send(e.name);

        });
    }
});*/
    
    })
    
module.exports = router;
