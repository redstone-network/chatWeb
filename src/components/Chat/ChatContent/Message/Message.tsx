import React from 'react';
import MessageContent from './MessageContent';
import { Role } from '@type/chat';
import AvartorIcon from '@icon/AvartorIcon';

const Message = React.memo(
  ({
    role,
    content,
    messageIndex,
    sticky = false,
  }: {
    role: Role;
    content: string;
    messageIndex: number;
    sticky?: boolean;
  }) => {

    return (
      <div
        className={`w-full text-gray-800 dark:text-gray-100 flex py-4 ${
          messageIndex % 2 ? 'justify-end' : 'justify-start'
        } `}
      >
        {!(messageIndex % 2) && (
          <div className='h-10 w-10 rounded-xl inline-flex items-center justify-center text-2xl mr-2 text-white'>
            <AvartorIcon />
          </div>
        )}
        <div
          className={`text-sm flex transition-all max-w-[80%] flex-col ease-in-out rounded-2xl px-4 py-3 w-fit ${
            messageIndex % 2 ? ' bg-blue-500 text-white	' : 'bg-zinc-100'
          }`}
        >
          <MessageContent
            role={role}
            content={content}
            messageIndex={messageIndex}
            sticky={sticky}
          />
        </div>
      </div>
    );
  }
);

export default Message;
