// Name: Zhihao Yu
// ID: 301305633

// collection schema
const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('contact' , PostSchema)
