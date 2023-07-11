import React from 'react';
import MessageContent from './MessageContent';
import { Role } from '@type/chat';
import AvartorIcon from '@icon/AvartorIcon';
import AvartorIconUser from '@icon/AvartorIconUser';

const Message = React.memo(
  ({
    role,
    content,
    messageIndex,
    question_type,
    messageLength,
    sticky = false,
  }: {
    role: Role;
    content: string;
    question_type?: string;
    messageIndex: number;
    messageLength: number;
    sticky?: boolean;
  }) => {

    return (
      <div
        className={`w-full text-gary_new-2  flex py-3.5 ${
          role === 'user' ? 'justify-end' : 'justify-start message-line'
        } `}
      >
        {!(role === 'user') && (
          <div className='h-8 w-8 inline-flex items-center avartor justify-center text-base mr-2.5'>
            <AvartorIcon />
          </div>
        )}
        <div
          className='text-base	flex transition-all max-w-[84%] flex-col ease-in-out p-6 w-fit bg-white rounded-[10px]'
        >
          <MessageContent
            role={role}
            content={content}
            messageIndex={messageIndex}
            question_type={question_type}
            messageLength={messageLength}
            sticky={sticky}
          />
        </div>
        {(role === 'user') && (
          <div className='ml-2 avartor'>
            <AvartorIconUser />
          </div>
        )}
      </div>
    );
  }
);

export default Message;
