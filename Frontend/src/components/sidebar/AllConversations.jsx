import React from "react";
import Conversation from "./Conversation";

const AllConversations = () => {
  return (
    <div
      className="w-full h-full py-2 flex flex-col overflow-auto"
      id="styled-scrollbar"
    >
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default AllConversations;
