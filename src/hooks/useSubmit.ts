import React from 'react';
import useStore from '@store/store';
import { useTranslation } from 'react-i18next';
import { ChatInterface } from '@type/chat';
import { getData } from '@api/api';
import { _defaultChatConfig } from '@constants/chat';
import { parseEventSource } from '@api/helper';

const useSubmit = () => {
  const { t } = useTranslation('api');
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);
  const setGenerating = useStore((state) => state.setGenerating);
  const generating = useStore((state) => state.generating);
  const currentChatIndex = useStore((state) => state.currentChatIndex);
  const setChats = useStore((state) => state.setChats);
  function isArrStringMatch(str: string) {
    try {
      const arr = JSON.parse(str);
      return Array.isArray(arr);
    } catch (error) {
      return false;
    }
  }
  const handleSubmit = async (msg: string) => {
    const chats = useStore.getState().chats;
    if (generating || !chats) return;

    const updatedChats: ChatInterface[] = JSON.parse(JSON.stringify(chats));

    updatedChats[currentChatIndex].messages.push({
      role: 'assistant',
      content: '',
    });

    setChats(updatedChats);
    setGenerating(true);

    try {
      if (chats[currentChatIndex].messages.length === 0)
        throw new Error('No messages submitted!');

     
      const response = await getData(msg);
      const resultString = await response.text();

      if (isArrStringMatch(resultString)) {
        const arr = JSON.parse(resultString);
        const renderArray = async (arrIndex: number) => {
          if (arrIndex >= arr.length) {
            setGenerating(false);
            return;
          }
  
          const chunkSize = Math.ceil(arr[arrIndex].length / 20);
          const chunks = [];
          for (let i = 0; i < arr[arrIndex].length; i += chunkSize) {
            chunks.push(arr[arrIndex].slice(i, i + chunkSize));
          }
  
          const renderChunk = async (chunkIndex: number) => {
            if (chunkIndex >= chunks.length) {
              if (arrIndex < arr.length - 1) {
                const updatedChats: ChatInterface[] = JSON.parse(
                  JSON.stringify(useStore.getState().chats)
                );
                updatedChats[currentChatIndex].messages.push({
                  role: 'assistant',
                  content: '',
                });
                await setChats(updatedChats);
              }
              renderArray(arrIndex + 1);
              return;
            }
  
            const updatedChats: ChatInterface[] = JSON.parse(
              JSON.stringify(useStore.getState().chats)
            );
            const updatedMessages = updatedChats[currentChatIndex].messages;
  
            // 等待整个代码片段
            if (chunks[chunkIndex].includes('```')) {
              const endIndex = chunks.findIndex((c, idx) =>
                idx > chunkIndex && c.includes('```')
              );
              if (endIndex !== -1) {
                updatedMessages[updatedMessages.length - 1].content += chunks
                  .slice(chunkIndex, endIndex + 1)
                  .join('');
                await setChats(updatedChats);
                chunkIndex = endIndex;
              }
            } else {
              updatedMessages[updatedMessages.length - 1].content +=
                chunks[chunkIndex];
              await setChats(updatedChats);
            }
  
            setTimeout(() => {
              renderChunk(chunkIndex + 1);
            }, 200); // 可以根据需要调整延时
          };
  
          renderChunk(0);
        };
  
        renderArray(0);
      } else {
        const updatedChats: ChatInterface[] = JSON.parse(
          JSON.stringify(useStore.getState().chats)
        );
        const chunkSize = Math.ceil(resultString.length / 2);
        const chunks = [];
        for (let i = 0; i < resultString.length; i += chunkSize) {
          chunks.push(resultString.slice(i, i + chunkSize));
        }
        // 使用setTimeout模拟流式渲染
        const renderChunk = async (index: number) => {
          if (index >= chunks.length) {
            setGenerating(false);
            return;
          }

          const updatedChats: ChatInterface[] = JSON.parse(
            JSON.stringify(useStore.getState().chats)
          );
          const updatedMessages = updatedChats[currentChatIndex].messages;
          updatedMessages[updatedMessages.length - 1].content += chunks[index];
          await setChats(updatedChats);

          setTimeout(() => {
            renderChunk(index + 1);
          }, 200); // 可以根据需要调整延时
        };
        renderChunk(0);
        // const updatedMessages = updatedChats[currentChatIndex].messages;
        // updatedMessages[updatedMessages.length - 1].content += resultString;
        // setChats(updatedChats);
      }
    } catch (e: unknown) {
      const err = (e as Error).message;
      setError(err);
      const chats = useStore.getState().chats;
      const updatedChats: ChatInterface[] = JSON.parse(JSON.stringify(chats));
      updatedChats[currentChatIndex].messages.pop();
      setChats(updatedChats);
      setGenerating(false);
    }
    setGenerating(false);
  };

  return { handleSubmit, error };
};

export default useSubmit;
