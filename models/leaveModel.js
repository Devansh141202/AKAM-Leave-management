const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    toDate:{
        type:Date,
        require:true,
    },
    fromDate:{
        type:Date,
        require:true,
    },
    reason:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    }
})

const leaveModel = mongoose.model("leave", leaveSchema)

module.exports = leaveModel;