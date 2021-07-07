const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");





router.get('/livingrooms',async (req, res)=>{

    try{ 
       const results = await Post.find();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }


    
    })
    
module.exports = router;
