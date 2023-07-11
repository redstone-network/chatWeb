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
  const { subtitle, desc, charts } = data;
  return (
    <div className='rounded-[10px] mt-4 p-4 text-lg text-black bg-gary_new-0'>
      {desc && (
        <div className="pb-4.5 break-words whitespace-normal	">
          {desc}
        </div>
      )}
      
      {charts && (
        <div className='grid grid-cols-12'>
          {charts.map((chart, j) => {
            return (
              <div
                className={`${
                  colMap[(chart.col as keyof colMap) || 12]
                } bg-white rounded-lg py-2 mb-2`}
              >
                {chart.type === 'line' && (
                  <LineChartComponent data={chart.data} />
                )}
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
