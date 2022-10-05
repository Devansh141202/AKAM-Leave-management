const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const empSchema = new mongoose.Schema({
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
    },
    post:{
        type:String,
        require:true,
    }
})

empSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id:this._id,
        phone:this.phone
    },process.env.JWT_SECRET_KEY, {expires:"7d"})
}

const empModel = mongoose.model("Emp", empSchema)

module.exports = empModel;