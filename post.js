
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");



router.post('/', async (req, res)=>{
    console.log(req.body)
 
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
try{
  const savePost = await post.save();
  res.json(savePost);
}catch(err){
    res.json({meesage: err});
}

});


module.exports = router;
