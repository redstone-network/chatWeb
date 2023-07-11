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

      // const stream = await getData(msg);
      // if (stream) {
      //   if (stream.locked)
      //     throw new Error(
      //       'Oops, the stream is locked right now. Please try again'
      //     );
      //   const reader = stream.getReader();
      //   let reading = true;
      //   let partial = '';
      //   while (reading && useStore.getState().generating) {
      //     const { done, value } = await reader.read();
      //     const result = parseEventSource(
      //       partial + new TextDecoder().decode(value)
      //     );
      //     partial = '';

      //     if (result === '[DONE]' || done) {
      //       reading = false;
      //     } else {
      //       const resultString = result.reduce((output: string, curr: any) => {
      //         console.log('curr', curr);
      //         if (typeof curr === 'string') {
      //           output += curr;
      //         } else {
      //           const content = curr.content;
      //           if (content) output += content;
      //         }
      //         return output;
      //       }, '');

      //       const updatedChats: ChatInterface[] = JSON.parse(
      //         JSON.stringify(useStore.getState().chats)
      //       );
      //       const updatedMessages = updatedChats[currentChatIndex].messages;
      //       updatedMessages[updatedMessages.length - 1].content += resultString;
      //       setChats(updatedChats);
      //     }
      //   }
      //   if (useStore.getState().generating) {
      //     reader.cancel('Cancelled by user');
      //   } else {
      //     reader.cancel('Generation completed');
      //   }
      //   reader.releaseLock();
      //   stream.cancel();
      // }
      const response = await getData(msg);
      const resultString = await response.text();
      const updatedChats: ChatInterface[] = JSON.parse(
        JSON.stringify(useStore.getState().chats)
      );
      const updatedMessages = updatedChats[currentChatIndex].messages;
      updatedMessages[updatedMessages.length - 1].content += resultString;
      setChats(updatedChats);
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
