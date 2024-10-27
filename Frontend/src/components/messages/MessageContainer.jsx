import React from "react";
import Header from "./Header";
import AllMessages from "./AllMessages";
import MessageInput from "./MessageInput";
import { MdMessage } from "react-icons/md";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full h-full px-6 flex flex-col items-start justify-start border-l border-slate-700/50">
      {!selectedConversation ? (
        <NoMessagePlaceHolder />
      ) : (
        <>
          <Header selectedConversation={selectedConversation} />
          <AllMessages selectedConversation={selectedConversation} />
          <MessageInput selectedConversation={selectedConversation} />
        </>
      )}
    </div>
  );
};

const NoMessagePlaceHolder = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      {/* <h2 className="text-xl font-medium text-[#939ce6]">Hello Buddy</h2> */}
      <h2 className="text-3xl font-bold">
        Hello Buddy! 👋 <span className="text-[#d1a777]">User Name</span>
      </h2>

      <p className="text-slate-500">Click on a chat to start messaging</p>
      <span className="text-2xl text-slate-500">
        <MdMessage />
      </span>
    </div>
  );
};

export default MessageContainer;
