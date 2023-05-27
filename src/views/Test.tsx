import React, {useState, useEffect} from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function Test() {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    async function name(msg: string = 'hello') {
      const response = await fetch(`${import.meta.env.VITE_REQUEST_URL}/integration/request?prompt=${msg}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      console.log('response', response)
      if (!response.ok) {
        const error = await response.json()
        console.error(error.error)
        throw new Error('Request failed')
      }
      const data = response.body
      if (!data)
        throw new Error('No data')
  
      const reader = data.getReader()
      const decoder = new TextDecoder('utf-8')
      let done = false
  
      while (!done) {
        const { value, done: readerDone } = await reader.read()
        if (value) {
          const char = decoder.decode(value)
          if (char === '\n' && markdown.endsWith('\n'))
            continue
  
          if (char)
          setMarkdown(markdown + char)
        }
        done = readerDone
      }
    }
    name();

  }, [])
  return (
    <div>
      <h1 className="my-2">test</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}
