const mongoose = require('mongoose')

const mgrSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    class:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    }
})

const mgrModel = mongoose.model("mgr", mgrSchema)

module.exports = mgrModel;