const mongoose=require('mongoose');
// schema define structure
const userSchema= new mongoose.Schema({
    name: {
        type:String,
        required: true,    
    },
    contact: {
        type:Number,
        unique: true,
    },
})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;

// email: {
    //     type: String,
    //     required:true,
    //     unique: true,
    // },  
    // jobTitle: {
    //     type:String,
    // },

