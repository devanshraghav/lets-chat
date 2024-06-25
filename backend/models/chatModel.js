// Model (Code) - Collection (Mongodb)
// Schema (Code) - Document (Mongodb)

// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

const mongoose = require("mongoose");

// Creating Chat Schema (what data each individual chat will have)
const chatSchema = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    groupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Defining Model
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
