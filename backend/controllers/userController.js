// If there is any error in these controllers then we need to handle those errors:
// So, we need AsyncHandler provided by express === express-async-handler
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//  To register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //   if any one detail is missing
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all details");
  }

  //   check if user Exists

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // create user
  const user = await User.create({ name, email, password, pic });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id), //Send the token when the user is created
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

//  To login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   if any one detail is missing
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all details");
  }

  const userExists = await User.findOne({ email });

  if (userExists && (await userExists.matchPassword(password))) {
    res.send({
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      pic: userExists.pic,
      token: generateToken(userExists._id), //Send the token when the user logged in
    });
  }
  else{
    res.status(400);
    throw new Error("Incorrect email or password entered");
  }
});

module.exports = { registerUser, loginUser };
