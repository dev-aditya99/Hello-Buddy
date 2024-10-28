import React from "react";
import SearchInput from "./SearchInput";
import AllConversations from "./AllConversations";
import BottomBar from "./bottom_bar/BottomBar";

const Sidebar = ({ toggle }) => {
  return (
    <div
      className={`min-[780px]:w-[50%] w-full h-full flex flex-col items-center justify-start ${
        toggle ? "max-[780px]:invisible" : "max-[780px]:visible"
      } duration-100`}
    >
      <SearchInput />
      {/* <div className="divider m-0 h-0 px-3"></div> */}
      <AllConversations />
      {/* <div className="mt-auto divider px-3"></div> */}
      <BottomBar />
    </div>
  );
};

export default Sidebar;
