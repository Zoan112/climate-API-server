
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");



router.post('/', async (req, res)=>{
    console.log(req.body)
 
    const post = new Post({
        C: req.body.C,
        H: req.body.H
    });
try{
  const savePost = await post.save();
  res.json(savePost);
}catch(err){
    res.json({meesage: err});
}

});


module.exports = router;
