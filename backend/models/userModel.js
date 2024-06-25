// Name
// email
// passsword
// profilepic

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// const salt = bcrypt.genSaltSync(10);

// User Model

const User = mongoose.model("User", userSchema);

module.exports = User;
