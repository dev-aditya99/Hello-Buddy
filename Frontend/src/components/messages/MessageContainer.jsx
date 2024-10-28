import React, { useEffect, useState } from "react";
import Header from "./Header";
import AllMessages from "./AllMessages";
import MessageInput from "./MessageInput";
import { MdMessage } from "react-icons/md";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = ({ toggle, setToggle }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    if (selectedConversation) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [selectedConversation]);

  return (
    <>
      <div className="min-[780px]:w-[50%] w-full h-full ps-3 min-[780px]:flex hidden flex-col items-start justify-center border-l border-slate-700/50">
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

      {/* for small devices  */}
      <div
        className={`w-full h-full min-[780px]:px-6 py-4 min-[780px]:hidden flex flex-col items-start justify-start border-l border-slate-700/50 absolute top-0 ${
          toggle ? "right-0" : "right-[-100%]"
        } duration-100 z-20`}
      >
        {!selectedConversation ? (
          <NoMessagePlaceHolder />
        ) : (
          <>
            <Header
              selectedConversation={selectedConversation}
              setSelectedConversation={setSelectedConversation}
              setToggle={setToggle}
            />
            <AllMessages selectedConversation={selectedConversation} />
            <MessageInput selectedConversation={selectedConversation} />
          </>
        )}
      </div>
    </>
  );
};

const NoMessagePlaceHolder = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      {/* <h2 className="text-xl font-medium text-[#939ce6]">Hello Buddy</h2> */}
      <h2 className="min-[921px]:text-3xl text-2xl font-bold text-center">
        Hello Buddy! 👋{" "}
        <span className="text-[#d1a777]">{authUser?.first_name}</span>
      </h2>

      <p className="text-slate-500">Click on a chat to start messaging</p>
      <span className="text-2xl text-slate-500">
        <MdMessage />
      </span>
    </div>
  );
};

export default MessageContainer;
