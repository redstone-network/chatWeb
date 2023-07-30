import { EventSourceData } from '@type/api';

export const parseEventSource = (
  data: string
): '[DONE]' | EventSourceData[] => {
  const result = data
    .split('\n\n')
    .filter(Boolean)
    .map((chunk) => {
      const jsonString = chunk;
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
