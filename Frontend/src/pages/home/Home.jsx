import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <div className="w-full max-w-[1280px] mx-auto h-full py-8 sm:px-6 px-1 bg-gray-800/25 min-[921px]:border border-gray-500/50 shadow-lg rounded-lg min-[780px]:flex sm:flex-row items-start justify-start gap-2 relative overflow-hidden">
      <Sidebar toggle={toggle} />
      <MessageContainer toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

// flex flex-col items-center justify-start

export default Home;
