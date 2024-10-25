import React from "react";
import SearchInput from "./SearchInput";
import AllConversations from "./AllConversations";
import BottomBar from "./bottom_bar/BottomBar";

const Sidebar = () => {
  return (
    <div className="w-[40%] h-full flex flex-col items-center justify-start">
      <SearchInput />
      {/* <div className="divider m-0 h-0 px-3"></div> */}
      <AllConversations />
      {/* <div className="mt-auto divider px-3"></div> */}
      <BottomBar />
    </div>
  );
};

export default Sidebar;
