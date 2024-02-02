import { useState } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
} from 'recharts';

import ChartUIContainer from './ChartUIContainer';

const CustomTooltip = ({ active, payload, label, data }) => {
  if (active && payload && payload.length) {
    return (
      <p className='p-2 rounded-lg bg-neutral-11  font-light text-xs '>
        {label}: {payload[0].value}
      </p>
    );
  }
};

const LineChartContainer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const economy = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <ChartUIContainer
      isOpen={isOpen}
      target={40000}
      economy={economy}
      setIsOpen={setIsOpen}
    >
      <LineChart width={550} height={isOpen ? 550 : 200} data={data}>
        <Line type='linear' dataKey='price' stroke='#FFFFFF' />
        <CartesianGrid stroke='#ccc' strokeDasharray='1 50' />
        <XAxis dataKey='month' />
        <Tooltip
          active
          animationDuration={200}
          content={<CustomTooltip />}
          reverseDirection={{ x: false, y: false }}
          allowEscapeViewBox={{ x: false, y: false }}
        />
        <YAxis width={35} />
      </LineChart>
    </ChartUIContainer>
  );
};

export default LineChartContainer;
