import React from "react";
import ChatSection from "./ChatSection";
import MessageSecton from "./MessageSecton";

export const HomePage = () => {

  return (
    <>
      <div className="z-50 absolute top-0 left-0 w-full h-dvh bg-zinc-950 flex justify-center items-center">
        <div className="w-4/6 h-4/5 max-sm:w-full max-sm:h-full max-lg:w-[90%] max-lg:h-[90%] max-sm:p-2 flex gap-2 max-sm:gap-0 text-lg">
          <ChatSection/>
          <MessageSecton />
        </div>
      </div>
    </>
  );
};
