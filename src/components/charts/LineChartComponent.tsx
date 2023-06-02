// LineChartComponent.js

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
      <LineChart
        width={577}
        height={172}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Legend verticalAlign='top' height={36} />

        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='x' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='inflow' stroke='#8884d8' />
        <Line type='monotone' dataKey='outflow' stroke='#82ca9d' />
      </LineChart>
  );
};

export default LineChartComponent;
