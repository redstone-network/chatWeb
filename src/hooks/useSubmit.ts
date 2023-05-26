import React from 'react';
import useStore from '@store/store';
import { useTranslation } from 'react-i18next';
import { ChatInterface, MessageInterface } from '@type/chat';
import { getChatCompletion, getData } from '@api/api';
import { _defaultChatConfig } from '@constants/chat';
import { officialAPIEndpoint } from '@constants/auth';
import { parseEventSource } from '@api/helper';

const useSubmit = () => {
  const { t } = useTranslation('api');
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);
  const apiEndpoint = useStore((state) => state.apiEndpoint);
  const apiKey = useStore((state) => state.apiKey);
  const setGenerating = useStore((state) => state.setGenerating);
  const generating = useStore((state) => state.generating);
  const currentChatIndex = useStore((state) => state.currentChatIndex);
  const setChats = useStore((state) => state.setChats);

  const generateTitle = async (
    message: MessageInterface[]
  ): Promise<string> => {
    let data;
    if (!apiKey || apiKey.length === 0) {
      // official endpoint
      if (apiEndpoint === officialAPIEndpoint) {
        throw new Error(t('noApiKeyWarning') as string);
      }

      // other endpoints
      data = await getChatCompletion(
        useStore.getState().apiEndpoint,
        message,
        _defaultChatConfig
      );
    } else if (apiKey) {
      // own apikey
      data = await getChatCompletion(
        useStore.getState().apiEndpoint,
        message,
        _defaultChatConfig,
        apiKey
      );
    }
    return data.choices[0].message.content;
  };

  const handleSubmit = async (msg?: string) => {
    const chats = useStore.getState().chats;
    console.log('chats', chats);

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

      const response = await fetch(
        `${import.meta.env.VITE_REQUEST_URL}/integration/request?prompt=${msg}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('response', response);
      if (!response.ok) {
        const error = await response.json();
        console.error(error.error);
        throw new Error('Request failed');
      }
      const data = response.body;
      if (!data) throw new Error('No data');

      const reader = data.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (value) {
          const updatedChats: ChatInterface[] = JSON.parse(
            JSON.stringify(useStore.getState().chats)
          );
          const updatedMessages = updatedChats[currentChatIndex].messages;
          const contents = updatedMessages[updatedMessages.length - 1].content;
          setChats(updatedChats);
          const char = decoder.decode(value);
          if (char === '\n' && contents.endsWith('\n')) continue;

          if (char) {
            updatedMessages[updatedMessages.length - 1].content += char;
            setChats(updatedChats);
          };
        }
        done = readerDone;
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
