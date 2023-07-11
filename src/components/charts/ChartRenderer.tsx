// chartRenderer.js

import React from 'react';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';

const colMap = {
  12: 'col-span-12',
  8: 'col-span-8',
  7: 'col-span-7',
  6: 'col-span-6',
  5: 'col-span-5',
  4: 'col-span-4',
  3: 'col-span-3',
  2: 'col-span-2',
  1: 'col-span-1',
};
const ChartRenderer = ({ data }) => {
  console.log(data);
  const { subtitle, desc, charts } = data;
  return (
    <div className='rounded-[10px] mt-2 p-4 mb-8 text-lg text-black'>
      {desc && (
        <div className='pb-4.5 break-words whitespace-normal	'>{desc}</div>
      )}

      {charts &&
        charts.map((row: any, j: any) => {
          return (
            <div key={j} className='grid grid-cols-12'>
              {row.map((chart: any, i: any) => {
                return (
                  <div
                    key={i}
                    className={`${colMap[(chart.col as keyof colMap) || 12]} ${
                      chart.start ? 'col-start-' + chart.start : ''
                    } bg-white sss rounded-lg py-2 mb-2`}
                  >
                    {chart.type === 'line' && (
                      <LineChartComponent data={chart.data} />
                    )}
                    {
                      chart.type === 'none' && null
                    }
                    {chart.type === 'pie' && (
                      <PieChartComponent data={chart.data} />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default ChartRenderer;
