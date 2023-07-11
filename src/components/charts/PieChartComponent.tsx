import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineChartComponent = () => {
  return (
    <>
    <div className="text-lg text-black font-bold	mb-2">Total Issuance</div>
      <div className="text-3xl font-bold text-primary mb-3">1.332 B</div>
    <div style={{ width: '100%', height: 140 }}>
      
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            cx="30%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            fill='#8884d8'
            paddingAngle={5}
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend  layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
      </div>
      </>
  );
};

export default LineChartComponent;
