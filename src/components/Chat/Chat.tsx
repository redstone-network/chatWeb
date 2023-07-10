import React from 'react';
import ChatContent from './ChatContent';
const Chat = () => {

  return (
    <div className='flex h-full flex-1 flex-col'>
      <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1 bg-gary_new-0'>
        <ChatContent />
      </main>
    </div>
  );
};

export default Chat;
