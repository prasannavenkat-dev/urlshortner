const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({

longUrl:{
    type:String,
    required:true
},
shortUrl:{
    type:String,
    unique:true
},
totalClick:{
     type: Number,
    default:0
}


});


const urlModel = mongoose.model('urlshort',urlSchema);


module.exports = {urlModel}