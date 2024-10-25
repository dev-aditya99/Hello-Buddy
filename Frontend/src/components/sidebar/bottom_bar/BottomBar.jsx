import React from "react";
import Theme from "./Theme";
import Logout from "./Logout";
import Settings from "./Settings";

const BottomBar = () => {
  return (
    <div className="pt-2 mt-auto flex items-center justify-center gap-2 border-t border-slate-700/50">
      <Logout />
      <Theme />
      <Settings />
    </div>
  );
};

export default BottomBar;
