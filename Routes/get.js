const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
//const cors = require('cors')




router.get('/livingrooms'/* ,cors()*/ ,async (req, res)=>{

    try{ 
       const results = await Post.find();
        res.json(results);
    }
    catch(err){
        res.json({meesage: err}); 
    }


    
    })

/*Return latest entry*/
    router.get('/livingrooms%20-l'/*, cors()*/ , async (req, res)=>{
        try{ 
           const results = await Post.find().limit(1).sort({$natural:-1}) ;
            res.json(results);
        }
        catch(err){
            res.json({meesage: err}); 
        }
    
        })


   
    
module.exports = router;
