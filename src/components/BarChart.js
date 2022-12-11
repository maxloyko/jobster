import React from 'react';
import {
    BarChart as Chart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const BarChart = ({data}) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <Chart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='3 3 ' />
                <XAxis dataKey='date' />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey='count' fill='#3b82f6' barSize={75} />
            </Chart>
        </ResponsiveContainer>
    );
};

export default BarChart;