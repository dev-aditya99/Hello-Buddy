import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.sender_id === authUser?._id;

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${fromMe ? "chat-end mt-2" : "chat-start"} py-2`}>
      {/* chat avatar  */}
      <div className="chat-image avatar">
        <div className="w-5 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              fromMe
                ? authUser?.profile_pic
                : selectedConversation?.profile_pic ||
                  "https://cdn-icons-png.flaticon.com/128/847/847969.png"
            }
            className="bg-slate-600"
          />
        </div>
      </div>

      {/* chat details */}
      <div
        className={`chat-bubble ${
          fromMe && "bg-[#939ce6] text-slate-900"
        } ${shakeClass}`}
      >
        <p>{message?.message}</p>
        <time className="pt-2 text-xs opacity-50 flex items-center">
          {/* <IoMdTime /> */}
          {extractTime(message?.createdAt)}
        </time>
      </div>

      {/* message status  */}
      {fromMe && (
        <div className="chat-footer opacity-50">
          <RiCheckDoubleLine />
        </div>
      )}
    </div>
  );
};

export default Message;
