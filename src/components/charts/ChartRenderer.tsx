// chartRenderer.js

import React from 'react';

import LineChartComponent from './LineChartComponent';
import LineBar from './LineBar';

const colMap = {
  12: 'col-span-12',
  8: 'col-span-8',
  6: 'col-span-6',
  4: 'col-span-4',
  3: 'col-span-3',
};
const ChartRenderer = ({ data }) => {
  console.log(data);
  const { subtitle, title, charts } = data;
  return (
    <div className='rounded-lg mt-4 p-4 text-black bg-gray-200'>
      {title && (
        <div>
          {title.map((t, i) => (
            <div
              key={i}
              className='text-2xl font-sans
          font-bold'
            >
              {t}
            </div>
          ))}
        </div>
      )}
      {subtitle && <div className='808 pb-4'>{subtitle}</div>}
      {charts && (
        <div className='grid grid-cols-12'>
          {charts.map((chart, j) => {
            return (
              <div
                className={`${
                  colMap[(chart.col as keyof colMap) || 12]
                } bg-white rounded-lg py-2 mb-2`}
              >
                {chart.type === 'line' && <LineChartComponent data={chart.data} />}
                {chart.type === 'lineBar' && <LineBar data={chart.data} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChartRenderer;
