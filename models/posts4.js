const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    
    ename:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    nic:{
        type:String,
        require:true
    },
    production:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    }

});

module.exports = mongoose.model('Posts4',postSchema);






