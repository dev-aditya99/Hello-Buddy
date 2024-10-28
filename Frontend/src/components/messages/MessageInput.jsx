import React from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();

  const submitHandler = async (e) => {
    e.preventDefault();
    let message = e.target.message_input;
    await sendMessage(message.value);
    e.target.reset();
  };

  return (
    <form className="w-full pt-3" onSubmit={submitHandler}>
      <div className="sm:px-6 w-full flex items-center gap-4">
        {/* message input  */}
        <input
          type="text"
          className="py-3 px-6 bg-gray-800/75/ bg-transparent border border-gray-600/75 rounded-full outline-none focus:ring-1 ring-[#939ce6] grow"
          placeholder="Type message"
          name="message_input"
          autoComplete="off"
        />

        {/* send btn  */}
        <button
          className={`tooltip w-12 h-12 bg-[#939ce6] hover:bg-transparent text-[#141c2e] hover:text-[#939ce6] text-3xl flex items-center justify-center rounded-full duration-200 ${
            loading && "cursor-not-allowed"
          }`}
          disabled={loading}
          data-tip="Send"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoIosSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
