const mongoose = require('mongoose');
// SCHEMA define structure 
const userSchema = new mongoose.Schema({
    id: {
        type:Number,
        unique: true,
    },
    name: {
        type:String,
        required: true,    
    },
    email:{
        type:String,
        unique: true,
        required: true,
    },
    age:{
        type:Number
    },  
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("User",userSchema); 
// The "User" model now provides methods to interact with the users collection, such as find(), create(), update(), and delete().
module.exports = User;