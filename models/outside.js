const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    C: {
        type: Number,
        required: true,
    },
    H:{
        type: Number,
        required: true,
    }, 
    date:{
        type: Date,
        default: Date.now,
       /* required: true,*/
    },
});



module.exports = mongoose.model('outside', PostSchema);