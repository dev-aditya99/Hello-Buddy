import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation";
import useGetMessages from "../../Hooks/useGetMessages";

const AllConversations = () => {
  const { loading, conversations } = useGetConversation();
  const { messages } = useGetMessages();
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    if (conversations) {
      if (messages) {
        setLastMessage(messages[messages?.length - 1]?.message);
      }
    }
  }, [messages]);

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
              lastMessage={lastMessage}
            />
          );
        })
      )}
    </div>
  );
};

export default AllConversations;
