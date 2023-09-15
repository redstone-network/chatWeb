import useStore from '@store/store';
import { ShareGPTSubmitBodyInterface } from '@type/api';
import { ConfigInterface, MessageInterface } from '@type/chat';

export const getChatCompletion = async (
  endpoint: string,
  messages: MessageInterface[],
  config: ConfigInterface,
  apiKey?: string
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      messages,
      ...config,
      max_tokens: null,
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();
  return data;
};
export const getData = async ( msg: string) => {
  const token = useStore.getState().token;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${import.meta.env.VITE_REQUEST_URL}/v1/get_insight_with_token?prompt="${msg}"`, {
    method: 'GET',
    headers
  });
  if (response.status === 404 || response.status === 405) {
    const text = await response.text();
    if (text.includes('model_not_found')) {
      throw new Error(
        text +
          '\nMessage from ChatData:\nPlease ensure that you have access to the GPT-4 API!'
      );
    } else {
      throw new Error(
        'Message from ChatData:\nInvalid API endpoint! We recommend you to check your free API endpoint.'
      );
    }
  }
  if (response.status === 401) {
    return response.status
  }
  if (response.status === 402) {
    return response.status
  }
  if (response.status === 400 || !response.ok) {
    const text = await response.json();
    let error = text.message;
    throw new Error(error);
  }



  const stream = response.body;
  return stream;
};
export const getChatCompletionStream = async (
  endpoint: string,
  messages: MessageInterface[],
  config: ConfigInterface,
  apiKey?: string
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      messages,
      ...config,
      max_tokens: null,
      stream: true,
    }),
  });
  if (response.status === 404 || response.status === 405) {
    const text = await response.text();
    if (text.includes('model_not_found')) {
      throw new Error(
        text +
          '\nMessage from ChatData:\nPlease ensure that you have access to the GPT-4 API!'
      );
    } else {
      throw new Error(
        'Message from ChatData:\nInvalid API endpoint! We recommend you to check your free API endpoint.'
      );
    }
  }

  if (response.status === 429 || !response.ok) {
    const text = await response.text();
    let error = text;
    if (text.includes('insufficient_quota')) {
      error +=
        '\nMessage from ChatData:\nWe recommend changing your API endpoint or API key';
    } else {
      error += '\nRate limited! Please try again later.';
    }
    throw new Error(error);
  }

  const stream = response.body;
  return stream;
};

export const submitShareGPT = async (body: ShareGPTSubmitBodyInterface) => {
  const request = await fetch('https://sharegpt.com/api/conversations', {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const response = await request.json();
  const { id } = response;
  const url = `https://shareg.pt/${id}`;
  window.open(url, '_blank');
};

export const login = async (wallet: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const response = await fetch(`${import.meta.env.VITE_REQUEST_URL}/v1/login_with_wallet`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "wallet": wallet,
      "password": "123",
      "wallet_address": "string",
      "username": "string"
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();
  return data;
};
