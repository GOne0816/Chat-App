import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { CgProfile } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const MessageSecton = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey there! How's it going?", isSender: false },
    { text: "Hi! I'm doing well, thanks for asking. How about you?", isSender: true },
    { text: "I'm great! Just working on a new project.", isSender: false },
    { text: "That sounds interesting! What kind of project is it?", isSender: true },
  ])
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, isSender: true }]);
      setMessage("");
      // Simulate a response after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Thanks for your message! I'll replay you later. I'm busy now.", isSender: false },
        ]);
      }, 1000);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex flex-col gap-2 text-white">
      <div className="bg-zinc-900 shadow-zinc-700 h-[10%] rounded-xl px-8 flex justify-between items-center">
        <h1 className="font-bold flex items-center gap-2">
          <CgProfile className="size-8" /> Aditya Tiwari
        </h1>
        <div className="relative flex gap-4">
          <IoSearch className="size-8 cursor-pointer transition-all" />
          <MdSettings
            className="size-8 cursor-pointer transition-all"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? (
            <div className="absolute right-0 flex flex-col bg-zinc-900 rounded-lg mt-8 shadow-zinc-700">
              <button className="font-semibold hover:bg-zinc-700 py-2 px-8 rounded-t-lg">
                Profile
              </button>
              <button className="font-semibold hover:bg-zinc-700 py-2 px-8">
                Account
              </button>
              <button
                onClick={handleSignOut}
                className="font-semibold hover:bg-zinc-700 py-2 px-8 rounded-b-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/*========== Message Section ==========*/}
      <div className=" bg-zinc-800 h-[80%] rounded-xl px-8 py-8 flex flex-col justify-start items-start shadow-zinc-600 overflow-scroll no-scrollbar">
        {messages.map((msg, index) => (
          <div 
          key={index} 
          className={`max-w-[70%] p-3 rounded-lg ${
            msg.isSender 
              ? 'bg-blue-600 ml-auto rounded-br-none my-1 text-sm' 
              : 'bg-zinc-700 rounded-bl-none my-1 text-sm'
          }`}
        >
          {msg.text}
          </div>
        ))}
      </div>

      {/* ========== Text Area Section ========== */}
      <form
        onSubmit={handleSendMessage}
        className="bg-zinc-700 h-[10%] rounded-xl px-8 flex justify-start items-center"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your message here . . . "
          className="w-full h-full outline-none bg-zinc-700 "
        />
        <button type="submit"><IoSend /></button>
      </form>
    </div>
  );
};

export default MessageSecton;
