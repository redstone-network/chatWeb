// App.js

import React from 'react';
import ReactMarkdown from 'react-markdown';
import ChartRenderer from './ChartRenderer';

const markdown = `
# 示例

这是一个折线图的例子：

\`\`\`chart
[
  {"x": "A", "y": 400},
  {"x": "B", "y": 800},
  {"x": "C", "y": 600},
  {"x": "D", "y": 1000}
]
\`\`\`
`;

const App = () => {
  return (
    <div>
      <ReactMarkdown components={ChartRenderer} children={markdown} />
    </div>
  );
};

export default App;