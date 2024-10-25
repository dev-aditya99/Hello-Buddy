import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="w-full h-full py-8 px-6 bg-gray-800/25 border border-gray-500/50 shadow-lg rounded-lg  flex sm:flex-row items-start justify-start gap-2 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

// flex flex-col items-center justify-start

export default Home;
