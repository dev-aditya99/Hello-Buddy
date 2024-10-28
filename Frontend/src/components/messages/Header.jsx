import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall, IoSearch } from "react-icons/io5";
import { useSocketContext } from "../../context/SocketContext";

const Header = ({ selectedConversation }) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className="w-full max-w-full pb-2 px-3 py-2 flex items-center justify-between gap-5 border-b border-slate-700/50 shadow-md rounded-3xl">
      {/* profile pic or avatar */}
      <div
        className=" tooltip tooltip-bottom cursor-pointer hover:opacity-75 active:opacity-50 duration-200"
        data-tip="Profile"
      >
        <div
          className={`mask mask-squircle w-14 avatar block ${
            isOnline ? "online" : ""
          }`}
        >
          <img
            src={
              selectedConversation?.profile_pic ||
              "https://cdn-icons-png.flaticon.com/128/847/847969.png"
            }
          />
        </div>
      </div>

      {/* user details  */}
      <div className="flex flex-col items-start grow">
        <p className="max-w-[55%] text-xl font-medium text-nowrap truncate">
          {selectedConversation?.first_name +
            " " +
            selectedConversation?.last_name}
        </p>
        <span className="text-sm text-slate-400/75">
          {isOnline ? "Online" : ""}
        </span>
      </div>

      {/* other features  */}
      <div className="bg-[#232830] flex items-center justify-end gap-2">
        {/* video call  */}
        <button
          className="btn btn-neutral tooltip tooltip-bottom text-xl"
          data-tip="Video Call"
        >
          <FaVideo />
        </button>

        {/* voice call  */}
        <button
          className="btn btn-neutral tooltip tooltip-bottom text-xl"
          data-tip="Voice Call"
        >
          <IoCall />
        </button>

        <button
          className="btn btn-neutral tooltip tooltip-bottom text-xl"
          data-tip="In Search"
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
