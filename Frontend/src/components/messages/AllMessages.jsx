import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import MessagesSkeleton from "../placeholders/MessagesSkeleton";
import useListenMessages from "../../Hooks/useListenMessages";

const AllMessages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="w-full py-4 px-3 h-full flex flex-col overflow-auto">
      {loading && <MessagesSkeleton />}

      {!loading && messages?.length === 0 && (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-xl text-slate-500 font-medium capitalize text-center">
            Send a message to start the chating
          </p>
        </div>
      )}

      {!loading &&
        messages?.length > 0 &&
        messages?.map((eachMessage) => {
          return (
            <div key={eachMessage?._id} ref={lastMessageRef}>
              <Message message={eachMessage} />
            </div>
          );
        })}
    </div>
  );
};

export default AllMessages;
