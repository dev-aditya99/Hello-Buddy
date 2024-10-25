import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";

const Message = () => {
  return (
    <div className="chat chat-start">
      {/* chat avatar  */}
      <div className="chat-image avatar">
        <div className="w-5 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      {/* chat details */}
      {/* <div className="chat-header"></div> */}
      <div className="chat-bubble">
        <p>You were the Chosen One!</p>
        <time className="pt-2 text-xs opacity-50 flex items-center">
          {/* <IoMdTime /> */}
          12:45
        </time>
      </div>
      <div className="chat-footer opacity-50">
        <RiCheckDoubleLine />
      </div>
    </div>
  );
};

export default Message;
