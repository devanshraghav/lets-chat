import React, { useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const getAllChats = async () => {
    // const chatData = await fetch("/api/chat");
    // const jsonData = await chatData.json();
    // console.log(chatData);
    // console.log(jsonData);

    const data = await axios.get('http://127.0.0.1:5000/api/chat');
    console.log(data);
  }

  useEffect(() => {
    getAllChats();
  }, []);

  return (
    <div>
      <div className="left">
        <h1>Chats</h1>
        <input placeholder="Search" />
      </div>
      <div className="right">
        {/* <img src="" /> */}
        <h1>Devansh</h1>
      </div>
    </div>
  );
};

export default ChatPage;
