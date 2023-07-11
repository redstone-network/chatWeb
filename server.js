import express from 'express';
import fs from 'fs';
import { questionMapping, DEFAULT_ANSWER } from './questions.js';

const app = express();
const port = 3000;

class QuestionMappingStrategy {
  getResponse(prompt) {
    const mappedQuestion = prompt.endsWith('?') || prompt.endsWith('.') ? prompt.slice(0, -1) : prompt;
    return questionMapping[mappedQuestion] || DEFAULT_ANSWER;
  }
}

app.get('/api/v1/insight', (req, res) => {
  let prompt = req.query?.prompt?.trim();
  if (!prompt) res.status(400).json({ error: 'prompt is required' });
  prompt = prompt.toLowerCase();
  const strategy = new QuestionMappingStrategy();
  const response = strategy.getResponse(prompt);
  res.set('Content-Type', 'text/plain');
  res.send(response);
});

app.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});