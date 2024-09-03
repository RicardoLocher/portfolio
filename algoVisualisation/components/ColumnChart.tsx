import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ColumnChart = ( data: any ) => {
    return (
        <BarChart width={1600} height={600} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#272471" />
        </BarChart>
    );
};

export default ColumnChart;