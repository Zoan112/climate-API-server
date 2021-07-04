
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");



router.post('/livingroom', async (req, res)=>{
    console.log(req.body);
    console.log('C:',req.body.C);
    console.log('H',req.body.H);
   // console.log(req);
    let ts = Date.now();

// timestamp in milliseconds
console.log(ts);

// timestamp in seconds
console.log(Math.floor(ts/1000));


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
