import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall, IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-full max-w-full pb-2 px-3 py-2 flex items-center justify-between gap-5 border-b border-slate-700/50 shadow-md rounded-3xl overflow-y-hidden">
      {/* profile pic pr avatar */}
      <div className="avatar cursor-pointer hover:opacity-75 active:opacity-50 duration-200">
        <div className="mask mask-squircle w-14">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      {/* user details  */}
      <div className="flex flex-col items-start grow">
        <p className="max-w-[55%] text-xl font-medium text-nowrap truncate">
          User Name
        </p>
        <span className="text-sm text-slate-400/75">Online</span>
      </div>

      {/* other features  */}
      <div className="bg-[#232830] flex items-center justify-end gap-2">
        {/* video call  */}
        <button className="btn btn-neutral text-xl">
          <FaVideo />
        </button>

        {/* voice call  */}
        <button className="btn btn-neutral text-xl">
          <IoCall />
        </button>

        <button className="btn btn-neutral  text-xl">
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
