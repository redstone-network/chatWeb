// chartRenderer.js

import React from 'react';
import LineChartComponent from './LineChartComponent';

const chartRenderer = {
  code: ({node, inline, className, children, ...props}:any) => {
    const match = /language-(\w+)/.exec(className || '')
    console.log('chartRenderer', props)
    if (match && match[1] === 'chart') {
      const chartData = JSON.parse(children);

      return <LineChartComponent data={chartData} />;
    }

    return (
      <pre>
        <code className={className}>{children}</code>
      </pre>
    );
  },
};

export default chartRenderer;