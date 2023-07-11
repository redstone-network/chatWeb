// LineChartComponent.js
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  linearGradient,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChartComponent = ({total, title}:any) => {
  return (
    <>
      <div className='text-lg text-black font-bold	mb-2 font-sans'>
        {title}
      </div>
      <div className='text-3xl font-bold text-primary mb-3 font-sans'>
        <svg
          width='66'
          height='22'
          viewBox='0 0 66 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='3' y='3' width='18' height='16' rx='2' fill='#75E3C8' />
          <path
            d='M9.64773 8.18182V14H8.94318V8.92045H8.90909L7.48864 9.86364V9.14773L8.94318 8.18182H9.64773ZM13.2188 14H11.4233V8.18182H13.2983C13.8627 8.18182 14.3456 8.2983 14.7472 8.53125C15.1487 8.76231 15.4564 9.0947 15.6705 9.52841C15.8845 9.96023 15.9915 10.4773 15.9915 11.0795C15.9915 11.6856 15.8835 12.2074 15.6676 12.6449C15.4517 13.0805 15.1373 13.4157 14.7244 13.6506C14.3116 13.8835 13.8097 14 13.2188 14ZM12.1278 13.375H13.1733C13.6544 13.375 14.053 13.2822 14.3693 13.0966C14.6856 12.911 14.9214 12.6468 15.0767 12.304C15.232 11.9612 15.3097 11.553 15.3097 11.0795C15.3097 10.6098 15.233 10.2055 15.0795 9.86648C14.9261 9.52557 14.697 9.2642 14.392 9.08239C14.0871 8.89867 13.7074 8.80682 13.2528 8.80682H12.1278V13.375Z'
            fill='white'
          />
          <path
            d='M27.7841 14L30.3864 8.85227V8.80682H27.3864V8.18182H31.1136V8.84091L28.5227 14H27.7841ZM34.0703 14H32.2749V8.18182H34.1499C34.7143 8.18182 35.1972 8.2983 35.5987 8.53125C36.0002 8.76231 36.308 9.0947 36.522 9.52841C36.736 9.96023 36.843 10.4773 36.843 11.0795C36.843 11.6856 36.7351 12.2074 36.5192 12.6449C36.3033 13.0805 35.9889 13.4157 35.576 13.6506C35.1631 13.8835 34.6612 14 34.0703 14ZM32.9794 13.375H34.0249C34.5059 13.375 34.9046 13.2822 35.2209 13.0966C35.5372 12.911 35.773 12.6468 35.9283 12.304C36.0836 11.9612 36.1612 11.553 36.1612 11.0795C36.1612 10.6098 36.0845 10.2055 35.9311 9.86648C35.7777 9.52557 35.5485 9.2642 35.2436 9.08239C34.9387 8.89867 34.5589 8.80682 34.1044 8.80682H32.9794V13.375Z'
            fill='#75E3C8'
          />
          <path
            d='M50.6477 8.18182V14H49.9432V8.92045H49.9091L48.4886 9.86364V9.14773L49.9432 8.18182H50.6477ZM52.4233 8.18182H53.2642L55.2415 13.0114H55.3097L57.2869 8.18182H58.1278V14H57.4688V9.57955H57.4119L55.5938 14H54.9574L53.1392 9.57955H53.0824V14H52.4233V8.18182Z'
            fill='#75E3C8'
          />
          <rect x='1' y='1' width='64' height='20' rx='4' stroke='#74E3C8' />
        </svg>
      </div>
      <div style={{ width: '100%', height: 140 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#79C6FD' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#79C6FD' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Area
              type='monotone'
              dataKey='pv'
              stroke='#79C6FD'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineChartComponent;
