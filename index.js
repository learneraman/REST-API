const express = require("express");
const app = express();  
const PORT = 8000;
// server start
app.listen(PORT,()=>console.log('Server started at port 8000')); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// database connection
const connectDB = require("./connection"); 
connectDB();  // calling connection function 

// importing routes
const userRouter = require("./routes/user");  
app.use("/api/users",userRouter); 
 
  
// FLOW
// user -> routes() -> controller(manipulate data of model) -> model(manipulate data of database) 


// app.get("/api/users",async(req,res)=>{
//     const allusers = await User.find({});
//     const html = `<ul><li>${allusers.map((user)=>`<li>${user.name}</li>`).join("")}</ul>`
//     return res.send(html);
//     // return res.json(allusers);
// })
// app.post("/api/users",async(req,res)=>{
//     const body = await req.body;
//     const {id,name,email,age} = body;   
//      // frontend ka data req.body mei available hota hai
//      if(!id || !name || !email || !age){
//         return res.status(400).json({message:"All fields are required"});
//      } 
//      const user = new User({  // this line is creating a new user object in the database.
//         id:id,
//         name:name,
//         email:email,
//         age:age
//      });
//     await user.save();
//     console.log(user);
//     return res.json({status:"success"});   
// })

// ROUTE for specific user
// app.route("/api/users/:id")
//     .get(async(req,res)=>
//     {
//         //const user = await User.findById(req.params.id);  // finding the user according to database_ID
//         const user = await User.findOne({id:req.params.id});  // finding the user with id(1/2/3/4) given by us.
//         console.log(user);
//         if (!user) return res.status(404).json({message:"User not found"}); //res is a response object and json is a method of response object which is used to send json data to frontend.
//         return res.json(user);
//     })
//     .patch(async(req,res)=>{
//         // edit the user with id
//         // await User.findOneAndUpdate({id:req.params.id},req.body); // this function take arguments as (filter object,update)
//         // await User.findByIdAndUpdate(req.params.id,{req.body})
//         return res.json({status:"success"})
//     })
//     .delete(async(req,res)=>{
//         // delete the user with id
//         await User.findOneAndDelete({id:req.params.id});
//         return res.json({status:"success"});
//     })

    


