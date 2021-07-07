const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const outsidePost = require("../models/outside");
const mongoose = require("mongoose");


/*Show all zones */
router.get('/',async (req, res)=>{


mongoose.connection.db.listCollections().toArray((err, names)=>{
    console.log(names[0].name);
    console.log(names[1].name);
    let zones = [];
    names.forEach((n)=>{
        console.log("--->>", n.name);
       zones.push(n.name);
    })

   
    res.send('avaliable zones: ' + zones);
    console.log(zones);

})

    })
    



router.get('/livingrooms',async (req, res)=>{

    try{ 
       const results = await Post.find();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }


    
    })


    router.get('/outsides',async (req, res)=>{
        
        try{ 
           let results = await outsidePost.find();
            res.json(results);
        }
        catch(err){
            res.json({meesage: err}); 
        }
    
    
        
        })
module.exports = router;
