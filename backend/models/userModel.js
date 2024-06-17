// Name
// email
// passsword
// profilepic

const mongoose = require("mongoose");

// User Schema
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pofilepic: {
      type: String,
      default:
        "https://i.pinimg.com/736x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg",
    },
  },
  {
    timestamps: true,
  }
);

// User Model

const User = mongoose.Model("User", userSchema);

module.exports = User;
