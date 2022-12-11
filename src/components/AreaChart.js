import React from 'react';
import { AreaChart as Chart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChart = ({data}) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <Chart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill='#3b82f6' />
            </Chart>
        </ResponsiveContainer>
    );
};

export default AreaChart;