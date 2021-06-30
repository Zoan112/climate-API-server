const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    C: {
        type: Boolean,
        required: true,
    },
    H:{
        type: Boolean,
        required: true,
    }, 
    date:{
        type: Date,
        default: Date.now,
       /* required: true,*/
    },
});



module.exports = mongoose.model('Post', PostSchema);