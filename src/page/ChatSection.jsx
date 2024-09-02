import React, { useState } from "react";


const ChatSection = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Aditya Tiwari",
      lastMessage: "Khaye bina mar jayenge jamin nhi bechenge 😅",
      unreadCount: 0,
    },
    {
      id: 2,
      name: "Kashish💕💕",
      lastMessage: "Kal College chaloge",
      unreadCount: 2,
    },
    { id: 3, name: "Sanchita 🥰", lastMessage: "kasisa h tu", unreadCount: 0 },
    {
      id: 4,
      name: "Raj Patel",
      lastMessage: "Bsk Madhrchod call utha",
      unreadCount: 14,
    },
    {
      id: 5,
      name: "Sachin Singh",
      lastMessage: "Mission accomplished bhai",
      unreadCount: 0,
    },
  ]);
  return (
    <div className="w-1/4 gap-2 flex flex-col text-white max-sm:hidden max-md:hidden max-lg:hidden">
        <div className="h-[10%] px-8 flex items-center shadow-zinc-700 rounded-xl bg-zinc-900">
          <h1 className="font-extrabold text-2xl max-sm:hidden ">Quixy</h1>
        </div>
        <div className="h-[80%] px-8 py-4 shadow-zinc-600 rounded-xl bg-zinc-800">
          <h1>Chats</h1>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center space-x-3 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer"
            >
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{contact.name}</p>
                <p className="text-xs text-zinc-400 truncate">
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unreadCount > 0 && (
                <div className="bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {contact.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="h-[10%] px-8 flex items-center shadow-zinc-700 rounded-xl bg-zinc-900">
          <h1>GOne</h1>
        </div>
    </div>
  );
};

export default ChatSection;
