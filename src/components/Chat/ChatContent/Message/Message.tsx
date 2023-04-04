import React, { useState } from 'react';
import useStore from '@store/store';
import MessageContent from './MessageContent';
import useSubmit from '@hooks/useSubmit';
import { ChatInterface } from '@type/chat';
import { Role } from '@type/chat';
import SendIcon from '@icon/SendIcon2';

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
    const hideSideMenu = useStore((state) => state.hideSideMenu);
    const currentChatIndex = useStore((state) => state.currentChatIndex);
    const inputRole = useStore((state) => state.inputRole);
    const setChats = useStore((state) => state.setChats);

    const { handleSubmit } = useSubmit();
    const handleSaveAndSubmit = (_content: string) => {
      const updatedChats: ChatInterface[] = JSON.parse(
        JSON.stringify(useStore.getState().chats)
      );
      const updatedMessages = updatedChats[currentChatIndex].messages;
      if (_content !== '') {
        updatedMessages.push({ role: inputRole, content: _content });
      }
      setChats(updatedChats);
      handleSubmit(_content);
    };
    const handle = (msg: string) => {
      handleSaveAndSubmit(msg);
    };
    const questions = [
      {
        id: 1,
        question: '本书的重点是什么',
      },
    ];
    return (
      <div
        className={`w-full text-gray-800 dark:text-gray-100 flex py-2 ${
          messageIndex % 2 ? 'justify-end' : 'justify-start'
        } `}
      >
        <div
          className={`text-sm px-3 py-1.5 flex transition-all flex-col ease-in-out card ${
            messageIndex % 2 ? 'bg-blue-600	 text-white' : ''
          }`}
        >
          <MessageContent
            role={role}
            content={content}
            messageIndex={messageIndex}
            sticky={sticky}
          />

          {role && role === 'system' && (
            <div>
              {questions.map((item) => (
                <span key={item.id} className='flex'>
                  <span
                    onClick={() => { handle(item.question)}}
                    className='text-blue-500 cursor-pointer align-middle flex items-center mr-1'
                  >
                    <SendIcon />
                  </span>
                  {item.question}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Message;
