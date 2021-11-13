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
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
     },
    date:{
        type: Date,
        default: Date.now,
       /* required: true,*/
    },
    time:{
        type: String,
           /* required: true,*/
    },
});



module.exports = mongoose.model('outside', PostSchema);