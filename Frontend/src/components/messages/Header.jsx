import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall, IoSearch } from "react-icons/io5";
import { useSocketContext } from "../../context/SocketContext";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({
  selectedConversation,
  setSelectedConversation,
  setToggle,
}) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className="w-full max-w-full pb-2 px-3 py-2 flex items-center justify-between sm:gap-5 gap-2 border-b border-slate-700/50 shadow-md min-[780px]:rounded-3xl">
      {/* back  */}
      <button
        className="min-[780px]:hidden flex items-center justify-center hover:bg-[#939ce6]/[0.1] w-10 h-10 rounded-full"
        onClick={() => {
          setTimeout(() => {
            setSelectedConversation(null);
          }, 200);
          setToggle(false);
        }}
      >
        <IoIosArrowBack />
      </button>

      {/* profile pic or avatar */}
      <div
        className=" tooltip tooltip-bottom cursor-pointer hover:opacity-75 active:opacity-50 duration-200"
        data-tip="Profile"
      >
        <div
          className={`mask mask-squircle sm:w-14 w-10 avatar block ${
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
        <p className="max-w-[75%] text-xl font-medium text-nowrap truncate">
          {selectedConversation?.first_name +
            " " +
            selectedConversation?.last_name}
        </p>
        <span className="text-sm text-slate-400/75">
          {isOnline ? "Online" : ""}
        </span>
      </div>

      {/* other features  */}
      <div className="flex items-center justify-end gap-2 min-w-[870px]:">
        {/* video call  */}
        <button
          className="min-[870px]:btn btn-neutral max-[870px]:w-8 tooltip tooltip-bottom min-[870px]:text-xl"
          data-tip="Video Call"
        >
          <FaVideo />
        </button>

        {/* voice call  */}
        <button
          className="min-[870px]:btn btn-neutral max-[870px]:w-8 tooltip tooltip-bottom min-[870px]:text-xl"
          data-tip="Voice Call"
        >
          <IoCall />
        </button>

        {/* <button
          className="min-[870px]:btn btn-neutral max-[870px]:w-8 tooltip tooltip-bottom min-[870px]:text-xl"
          data-tip="In Search"
        >
          <IoSearch />
        </button> */}
      </div>
    </div>
  );
};

export default Header;
