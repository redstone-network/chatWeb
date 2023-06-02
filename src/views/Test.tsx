// App.js

import React, {useState, useEffect} from 'react';
import { EventSourceData } from '@type/api';

export const parseEventSource = (
  data: string
): '[DONE]' | EventSourceData[] => {
  const result = data
    .split('\n\n')
    .filter(Boolean)
    .map((chunk) => {
      const jsonString = chunk
        .split('\n')
        .map((line) => line.replace(/^data: /, ''))
        .join('');
      if (jsonString === '[DONE]') return jsonString;
      try {
        const json = JSON.parse(jsonString);
        return json;
      } catch {
        return jsonString;
      }
    });
  return result;
};

const App = () => {
  const [content, useContent] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REQUEST_URL}/integration/request?prompt=${msg}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const stream = response.body;
      if (stream) {
        if (stream.locked)
          throw new Error(
            'Oops, the stream is locked right now. Please try again'
          );
        const reader = stream.getReader();
        let reading = true;
        let partial = '';
        while (reading) {
          const { done, value } = await reader.read();
          const result = parseEventSource(
            partial + new TextDecoder().decode(value)
          );
          partial = '';
      
          if (result === '[DONE]' || done) {
            reading = false;
          } else {
            const resultString = result.reduce((output: string, curr) => {
              if (typeof curr === 'string') {
                partial += curr;
              } else {
                const content = curr.choices[0].delta.content;
                if (content) output += content;
              }
              return output;
            }, '');
      
        
            useContent(resultString);
          }
        }
        reader.releaseLock();
        stream.cancel();
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>test</div>
      {content}
    </div>
  );
};

export default App;