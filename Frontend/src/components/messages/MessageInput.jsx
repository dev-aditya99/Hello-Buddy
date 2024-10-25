import React from "react";
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className="sm:px-6 w-full flex items-center gap-4">
      {/* message input  */}
      <input
        type="text"
        className="py-3 px-6 bg-gray-800/75/ bg-transparent border border-gray-600/75 rounded-full outline-none focus:ring-1 ring-[#939ce6] grow"
        placeholder="Type message"
      />

      {/* send btn  */}
      <button className="w-12 h-12 bg-[#939ce6] hover:bg-transparent text-[#141c2e] hover:text-[#939ce6] text-3xl flex items-center justify-center rounded-full duration-200">
        <IoIosSend />
      </button>
    </div>
  );
};

export default MessageInput;
