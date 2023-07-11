import React, { useState, useEffect } from 'react';
import useStore from '@store/store';
import { Role } from '@type/chat';
import { useTranslation } from 'react-i18next';
import { ChatInterface } from '@type/chat';
import useSubmit from '@hooks/useSubmit';
import useAddChat from '@hooks/useAddChat';
const EditViewButtons = React.memo(
  ({
    sticky = false,
    handleSaveAndSubmit,
    handleSave,
    setIsModalOpen,
    setIsEdit,
    _setContent,
  }: {
    sticky?: boolean;
    handleSaveAndSubmit: () => void;
    handleSave: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    _setContent: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const { t } = useTranslation();

    return (
      <div className='flex'>
        <div className='flex-1 text-center flex justify-center'>
          {sticky && (
            <button
              className='btn relative btn-primary'
              onClick={handleSaveAndSubmit}
            >
              <div className='flex items-center justify-center gap-2'>
                {t('saveAndSubmit')}
              </div>
            </button>
          )}

          {sticky || (
            <button
              className='btn relative btn-neutral'
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <div className='flex items-center justify-center gap-2'>
                {t('saveAndSubmit')}
              </div>
            </button>
          )}

          {sticky || (
            <button
              className='btn relative btn-neutral'
              onClick={() => setIsEdit(false)}
            >
              <div className='flex items-center justify-center gap-2'>
                {t('cancel')}
              </div>
            </button>
          )}
        </div>
      </div>
    );
  }
);
const EditView = ({
  content,
  setIsEdit,
  messageIndex,
  sticky,
}: {
  content: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  messageIndex: number;
  sticky?: boolean;
}) => {
  const inputRole = useStore((state) => state.inputRole);
  const setChats = useStore((state) => state.setChats);
  const currentChatIndex = useStore((state) => state.currentChatIndex);
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);
  const addChat = useAddChat();
  const generating = useStore((state) => state.generating);
  const [_content, _setContent] = useState<string>(content);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  const { t } = useTranslation();

  const resetTextAreaHeight = () => {
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.shiftKey) && e.key === 'Enter') {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (sticky) {
        handleSaveAndSubmit();
        resetTextAreaHeight();
      } else handleSave();
    }
  };

  const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleSaveAndSubmit();
    resetTextAreaHeight();
  };
  const handleSave = () => {
    if (sticky && _content === '') return;
    const updatedChats: ChatInterface[] = JSON.parse(
      JSON.stringify(useStore.getState().chats)
    );
    const updatedMessages = updatedChats[currentChatIndex].messages;
    if (sticky) {
      updatedMessages.push({ role: inputRole, content: _content });
      _setContent('');
      resetTextAreaHeight();
    } else {
      updatedMessages[messageIndex].content = _content;
      setIsEdit(false);
    }
    setChats(updatedChats);
  };

  const { handleSubmit } = useSubmit();
  const handleSaveAndSubmit = () => {
    const updatedChats: ChatInterface[] = JSON.parse(
      JSON.stringify(useStore.getState().chats)
    );
    const updatedMessages = updatedChats[currentChatIndex].messages;
    if (sticky) {
      if (_content !== '') {
        updatedMessages.push({ role: inputRole, content: _content });
      }
      _setContent('');
      resetTextAreaHeight();
    } else {
      updatedMessages[messageIndex].content = _content;
      updatedChats[currentChatIndex].messages = updatedMessages.slice(
        0,
        messageIndex + 1
      );
      setIsEdit(false);
    }
    setChats(updatedChats);
    handleSubmit(_content);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [_content]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <div className='shrink-0 pt-10 pb-8 transition-transform bg-white'>
      {error && (
        <div className='text-center max-w-[720px] mx-auto p-2 border rounded-md	border-rose-700	text-rose-700 mb-2'>
          {error}
        </div>
      )}
      <div className='max-w-[720px] mx-auto h-full'>
        <div className='relative'>
          <div className='flex items-center h-full bg-white  shadow-text-area rounded-[10px] focus-within:ring-0 ring-gray-300'>
            <textarea
              ref={textareaRef}
              className='flex-grow outline-none bg-transparent scroll-p-2 px-3 py-3 min-h-[50px] rounded-xl resize-none'
              placeholder='Type message'
              onChange={(e) => {
                _setContent(e.target.value);
              }}
              value={_content}
              onKeyDown={handleKeyDown}
              rows={1}
            ></textarea>
            <div className='pr-2 inline-flex items-center'>
              <button
                type='button'
                onClick={clickHandle}
                className='h-[36px] w-[40px] hover:bg-sendBtn  rounded-lg inline-flex items-center justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='18'
                  viewBox='0 0 23 18'
                  fill='none'
                >
                  <path
                    d='M22.0178 9.2095L1.33386 0.685242L6.27447 8.88864M22.0178 9.2095L1.80963 17.288L6.27447 8.88864M22.0178 9.2095L6.27447 8.88864'
                    stroke='#BBBBBB'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-3.5'>
        <div className='max-w-[720px] mx-auto flex justify-center h-full items-center'>
          <div className='text-sm flex items-center gap-2'>
            <button
              type='button'
              className='rounded-lg px-2 inline-flex items-center justify-center border shrink-0 text-center disabled:pointer-events-none bg-white text-sm border-gray-300 text-gray-300 h-6'
            >
              <svg
                className="mr-2"
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
              >
                <mask
                  id='mask0_2902_1203'
                  maskUnits='userSpaceOnUse'
                  x='1'
                  y='1'
                  width='11'
                  height='10'
                >
                  <path
                    d='M9.00073 5H11.0007V1.5H1.00073V11H11.0007V6H9.00073V5Z'
                    fill='white'
                  />
                </mask>
                <g mask='url(#mask0_2902_1203)'>
                  <circle cx='6.00073' cy='6' r='4' stroke='#949494' />
                </g>
                <path d='M7.00073 5H10.5007V1.5L7.00073 5Z' fill='#949494' />
              </svg>
              Regenerate
            </button>
            <button
              type='button'
              onClick={() => {
                if (!generating) {
                  setError('');
                  addChat();
                }
              }}
              className='rounded-lg px-2 inline-flex items-center justify-center border shrink-0 text-center disabled:pointer-events-none bg-white text-sm border-gray-300 text-gray-300 h-6'
            >
              <svg
                className="mr-2"
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.70647 0.434003C9.43147 0.156834 9.05493 0 8.66213 0C8.26978 0 7.89365 0.15648 7.61708 0.434726L0.796538 7.25521C0.347892 7.65051 0.0537892 8.23874 0.00268078 8.87135L0.000732422 11.4001V12H3.08113C3.76163 11.9533 4.35564 11.6563 4.77468 11.173L11.5668 4.38299C11.8438 4.10602 11.9994 3.73036 11.9994 3.33866C11.9994 2.94696 11.8438 2.5713 11.5668 2.29433L9.70647 0.434003ZM3.89737 10.356C3.65781 10.63 3.35948 10.7792 3.03898 10.8019L1.20081 10.8007V8.91987C1.22499 8.64475 1.37536 8.344 1.61842 8.12902L8.4681 1.28098C8.51948 1.2292 8.5894 1.20007 8.66235 1.20007C8.73529 1.20007 8.80521 1.2292 8.85659 1.28098L10.7186 3.14297C10.7705 3.19493 10.7997 3.26539 10.7997 3.33887C10.7997 3.41235 10.7705 3.48282 10.7186 3.53477L3.89737 10.356Z'
                  fill='#BBBBBB'
                />
              </svg>
              New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const InputBar = React.memo(
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
    const [isEdit, setIsEdit] = useState<boolean>(sticky);

    return (
      <div className={`w-full border-t border-gary_new-1 bg-white group`}>
        <EditView
          content={content}
          setIsEdit={setIsEdit}
          messageIndex={messageIndex}
          sticky={sticky}
        />
      </div>
    );
  }
);

export default InputBar;
