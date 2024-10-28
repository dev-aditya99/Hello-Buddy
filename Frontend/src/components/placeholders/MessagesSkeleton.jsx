import React from "react";

const MessagesSkeleton = () => {
  return (
    <>
      {/* // left */}
      <div className="w-full flex items-baseline justify-start gap-2 animate-pulse">
        <div className="w-5 h-5 bg-slate-600 rounded-full"></div>
        <div className="sm:w-[40%] w-[60%] py-6 bg-slate-600 rounded-3xl"></div>
      </div>
      {/* // right */}
      <div className="mt-4 w-full flex items-baseline justify-end gap-2 animate-pulse">
        <div className="sm:w-[40%] w-[60%] py-6 bg-slate-600 rounded-3xl"></div>
        <div className="w-5 h-5 bg-slate-600 rounded-full"></div>
      </div>
    </>
  );
};

export default MessagesSkeleton;
