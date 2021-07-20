
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const outsidePost = require("../models/outside");
const cors = require("cors");
const ipfilter = require('express-ipfilter').IpFilter;
const ips = ['31.154.216.206', '::ffff:31.154.216.206'];


//*Living room sensor *//
router.post('/livingroom' ,ipfilter(ips, { mode: 'allow' }) , async (req, res)=>{
    console.log('/livingroom', req.body);
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


//*Outside sensor*//
router.post('/outside', ipfilter(ips, { mode: 'allow' }) , async (req, res)=>{
    console.log("outside:")
    console.log('/outside:',req.body)


let currentDate = new Date();
let postDate = currentDate.toLocaleString("he-IL", {timeZone: "Asia/Jerusalem"});

    const outsideData = new outsidePost({
        time: postDate,
        C: req.body.C,
        H: req.body.H
    });
try{
  const saveOutsideData= await outsideData.save();
  console.log(saveOutsideData);
  res.json(saveOutsideData);
}catch(err){
    res.json({meesage: err});
}
})



module.exports = router;
