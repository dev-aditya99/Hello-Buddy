import React from "react";
import { FaClock } from "react-icons/fa";

const Conversation = () => {
  return (
    <>
      {/* chat box  */}
      <div className="w-full py-2 px-4 flex items-center justify-start gap-3 border border-gray-700/50 rounded-lg shadow-sm cursor-pointer hover:bg-slate-700/25 active:bg-gray-800/50">
        {/* avatar  */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
              draggable="false"
            />
          </div>
        </div>

        {/* user and last chat details */}
        <div className="flex items-start justify-between gap-4 flex-1">
          <div className="flex flex-col">
            <span className="font-medium">User Name</span>
            <p className="text-sm text-slate-500 flex items-center gap-2">
              Recent Message Her...
              {/* <FaClock /> */}
            </p>
          </div>

          {/* last chat time  */}
          <span className="text-sm font-light">Yesterday</span>
        </div>
      </div>

      {/* border-b border-gray-700/50 */}

      {/* divider  */}
      <div className="divider. my-1 py-0 px-3 h-0"></div>
    </>
  );
};

export default Conversation;
