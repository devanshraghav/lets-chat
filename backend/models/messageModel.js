// Name or id of the sender
// Content of the message
// reference to the chat it belongs to

const mongoose = require("mongoose");

//  Message Schema:

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

// Message Model

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
