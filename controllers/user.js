// controllers used to control routes
const User = require("../models/user"); // The User model now provides methods to interact with the users collection, such as find()etc.
async function handleGetAllUsers(req, res) {
  const allusers = await User.find({});
  return res.json(allusers);
}
async function handlePostUser(req, res) {
  const { id, name, email, age } = req.body;
  console.log(id, name, email, age);
  if (!id || !name || !email || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = new User({
    id: id,
    name: name,
    email: email,
    age: age,
  });
  await user.save();
  console.log(user);
  return res.json({ status: "success" });
}
async function handleGetUserById(req, res) {
  //const user = await User.findById(req.params.id);  // finding the user according to database_ID
  const user = await User.findOne({ id: req.params.id }); // finding the user with id(1/2/3/4) given by us.
  console.log(user);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
}
async function handlePatchUserById(req, res) {
  await User.findOneAndUpdate({ id: req.params.id }, req.body);
  // await User.findByIdAndUpdate(req.params.id,{req.body})
  return res.json({ status: "success" });
}
async function handleDeleteUserById(req, res) {
  await User.findOneAndDelete({ id: req.params.id });
  return res.json({ status: "success" });
}

module.exports = {
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handlePatchUserById,
  handleDeleteUserById,
};
