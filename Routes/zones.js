const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const outsidePost = require("../models/outside");
const mongoose = require("mongoose");
const cors =require("cors");



/*Show all zones */
router.get('/', cors(),async (req, res)=>{
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

    });
    


//Show all living room 
router.get('/livingrooms', cors(),async (req, res)=>{
    console.log('livingRooms')
    try{ 
       const results = await Post.find();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }
    })

//Show all outside
    router.get('/outsides',cors(),async (req, res)=>{
        console.log('outsides')
        try{ 
           let results = await outsidePost.find();
            res.json(results);
        }
        catch(err){
            res.json({meesage: err}); 
        }
    })

//Show latest outside
    router.get('/outsides%20-l',cors(),async (req, res)=>{
        console.log('outside -l')
        try{ 
           let results = await outsidePost.find().limit(1).sort({$natural:-1});
            res.json(results);
        }
        catch(err){
            res.json({meesage: err}); 
        }
    });

    
//Show latest living room 
    router.get('/livingrooms%20-l',cors() , async (req, res)=>{
        try{ 
           const results = await Post.find().limit(1).sort({$natural:-1}) ;
            res.json(results);
        }
        catch(err){
            res.json({meesage: err}); 
        }
    
        });
    
        
        

module.exports = router;
