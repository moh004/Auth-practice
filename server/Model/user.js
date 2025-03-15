const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    username: {type : String , required: true, unique: true},
    email:    {type : String , required: true, unique: true},
    password: {type : String , required: true},
    score:    {type:Number , default: 1}
})

module.exports = mongoose.model("User" , userSchema)
