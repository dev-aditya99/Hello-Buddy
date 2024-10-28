import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversations, lastIdx, lastMessage }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversations?._id);

  return (
    <>
      {/* chat box  */}
      <div
        className={`w-full py-2 px-4 flex items-center justify-start gap-3 border border-gray-700/50 rounded-lg shadow-sm cursor-pointer hover:bg-slate-700/25 active:bg-gray-800/50 ${
          selectedConversation?._id === conversations?._id
            ? "bg-slate-600/50"
            : ""
        }`}
        onClick={() => setSelectedConversation(conversations)}
      >
        {/* avatar  */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={
                conversations?.profile_pic ||
                "https://cdn-icons-png.flaticon.com/128/847/847969.png"
              }
              alt="User Avatar"
              draggable="false"
              className="bg-slate-700"
            />
          </div>
        </div>

        {/* user and last chat and other details */}
        <div className="flex items-start justify-between gap-4 flex-1">
          <div className="flex flex-col">
            {/* user name  */}
            <span className="font-medium">
              {conversations?.first_name + " " + conversations?.last_name}
            </span>

            {/* last chat or online status  */}
            <p className="text-sm text-slate-500 flex items-center gap-2">
              {isOnline ? "Active Now" : !lastMessage && "No recent messages"}
            </p>
          </div>

          {/* username  */}
          <span className="sm:w-auto w-12 text-sm font-light truncate">
            ~{conversations?.username}
          </span>
        </div>
      </div>

      {/* divider */}
      {!lastIdx && <div className="divider my-1 py-0 px-3 h-0"></div>}
    </>
  );
};

export default Conversation;
