import { useMemo } from 'react';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { cumulativeToWeekly } from '../lib/csv';

type LineGraphProps = {
  data: string;
};

export default function LineGraph({ data }: LineGraphProps) {
  const weeklyData = useMemo(() => cumulativeToWeekly(data), [data]);

  return (
    <ResponsiveContainer width="100%" height={800}>
      <LineChart data={weeklyData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Week" label={{ value: 'Week', position: 'insideBottom', offset: -17 }} interval={0} />
        <YAxis dataKey="tCO2e" label={{ value: 'tCO2e', position: 'insideLeft', angle: -90 }} tickCount={12} />
        <Tooltip
          formatter={(value: number) => `${value.toFixed(2)} tCO2e`}
          labelFormatter={(value: number) => `Week ${value}`}
        />
        <Legend align="right" />
        <Line name="2022" type="linear" dataKey="tCO2e" stroke="#db775f" />
      </LineChart>
    </ResponsiveContainer>
  );
}
