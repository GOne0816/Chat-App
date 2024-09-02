import React from 'react'

const ChatSection = () => {
  return (
    <div className='w-1/4 gap-2 flex flex-col'>
      <div className='h-[10%] px-8 flex items-center drop-shadow-xl shadow-inner rounded-full bg-white'>
        <h1 className='font-extrabold text-2xl'>Quixy</h1>
      </div>
      <div className='h-[80%] px-8 py-4 drop-shadow-xl shadow-inner rounded-3xl bg-white' >
        <h1>Chats</h1>
      </div>
      <div className='h-[10%] px-8 flex items-center drop-shadow-xl shadow-inner rounded-full bg-white'>
        <h1>Profile</h1>
      </div>
    </div>
  )
}

export default ChatSection
