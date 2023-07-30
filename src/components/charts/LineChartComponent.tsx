// LineChartComponent.js
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const AreaChart: React.FC = ({data}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 创建图表实例
    const chart = echarts.init(chartRef.current!);
    const x = data.map((item: any) => item.X);
    const y = data.map((item: any) => item.Y);
    // 定义图表配置项
    const options: EChartsOption = {
      xAxis: {
        type: 'category',
        data: x,
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{c}', // Tooltip显示的格式
      },
      series: [
        {
          type: 'line',
          smooth: true, // 设置平滑属性为 true
          symbol: 'none', // 去掉线上的点
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#79C6FD', // 渐变起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(129, 201, 253, 0.00)', // 渐变结束颜色
                },
              ],
            },
          },
          data: y,
        },
      ],
    };

    // 使用配置项显示图表
    chart.setOption(options);

    // 在组件销毁时销毁图表实例
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '200px' }} />;
};
const LineChartComponent = ({ data, total, title }: any) => {
  return (
    <>
      <div className='text-lg text-black font-bold	mb-2 font-sans'>{title}</div>
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
      <div style={{ width: '100%', height: '200px' }}>
        <AreaChart data={data}></AreaChart>
      </div>
    </>
  );
};

export default LineChartComponent;
