import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const QUESTION = `list the recent valuable project airdrops and the specific steps to participate in them.`
app.get('/api/integration/request', (req, res) => {
  let prompt = req.query?.prompt?.trim();
  if (!prompt) res.status(400).json({ error: 'prompt is required' });
  prompt = prompt.toLowerCase();
  console.log
  let response = '';
  switch (prompt) {
    case QUESTION:
      response = `A paragraph with *emphasis* and **strong importance**.

      > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
      
      * Lists
      * [ ] todo
      * [x] done
      
      A table:
      
      | a | b |
      | - | - |
      `;
      break;
  
    default:
      response = `A paragraph with *emphasis* and **strong importance**.

      > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
      
      * Lists
      * [ ] todo
      * [x] done
      
      A table:
      
      | a | b |
      | - | - |
      `;
      break;
  }
  res.send(response);
});

app.get('/api/stream', (req, res) => {
  const fileStream = fs.createReadStream('package.json', { highWaterMark: 1 });
  fileStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});
