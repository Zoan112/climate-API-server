const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");





router.get('/',async (req, res)=>{
//console.log("it works");
   // res.send("it works!!");
   // res.send(db.living-room.find().pretty());
    
    try{ 
       const results = await Post.find();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }


    
    })
    
module.exports = router;
