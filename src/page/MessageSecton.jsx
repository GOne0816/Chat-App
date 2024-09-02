import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { CgProfile } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const MessageSecton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="bg-white h-[10%] rounded-full px-8 flex justify-between items-center drop-shadow-xl shadow-inner">
        <h1 className="font-bold flex items-center gap-2">
          <CgProfile className="size-8" /> User Name
        </h1>
        <div className="relative">
          <MdSettings
            className="size-8 cursor-pointer transition-all"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? (
            <div className="absolute right-0 flex flex-col bg-white rounded-lg mt-4">
              <button className="font-semibold hover:bg-gray-200 py-2 px-8 rounded-t-lg">
                Profile
              </button>
              <button className="font-semibold hover:bg-gray-200 py-2 px-8">
                Account
              </button>
              <button
                onClick={handleSignOut}
                className="font-semibold hover:bg-gray-200 py-2 px-8 rounded-b-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="-z-10 bg-white h-[80%] rounded-3xl px-8 py-8 flex flex-col justify-start items-start drop-shadow-xl shadow-inner">
        <h1>Messages . . .</h1>
        <h1>Messages . . .</h1>
        <h1>Messages . . .</h1>
      </div>
      <div className="bg-white h-[10%] rounded-full px-8 flex justify-start items-center drop-shadow-xl shadow-inner">
        <input
          type="text"
          placeholder="Type your message here . . . "
          className="w-full h-full outline-none "
        />
      </div>
    </div>
  );
};

export default MessageSecton;
