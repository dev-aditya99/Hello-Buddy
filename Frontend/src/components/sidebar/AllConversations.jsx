import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation";

const AllConversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div
      className="w-full h-full py-2 flex flex-col overflow-auto"
      id="styled-scrollbar"
    >
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        conversations?.map((eachCoversation, idx) => {
          return (
            <Conversation
              key={eachCoversation?._id}
              conversations={eachCoversation}
              lastIdx={idx === conversations?.length - 1}
            />
          );
        })
      )}
    </div>
  );
};

export default AllConversations;
