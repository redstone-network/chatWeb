import express from 'express';

const app = express();
const port = 3000;

app.get('/api/integration/request', (req, res) => {
  const prompt = req.query.prompt;
  let response = '';
  switch (prompt) {
    case 'sss':
      response = 'sss';
      break;
  
    default:
      response = 'default response';
      break;
  }
  res.json(response);
});

app.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});
