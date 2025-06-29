const mongoose = require('mongoose');
async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/p2database").then(()=>console.log('connected db')).catch((err)=>console.log("error occoured"));
}
module.exports = connectDB;