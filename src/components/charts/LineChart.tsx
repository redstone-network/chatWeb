import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { x: '1991', y: 3 }
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    xField: 'x',
    yField: 'y',
  };
  return <Line {...config} />;
};
export default Page;