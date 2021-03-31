import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UsersNumber from './UsersNumber';

const data = [
  {
    name: 'Jan',
    Users: 4000,
  },
  {
    name: 'Feb',
    Users: 8500,
  },
  {
    name: 'Mar',
    Users: 13000,
  },
  {
    name: 'Apr',
    Users: 17000,
  },
  {
    name: 'May',
    Users: 9850,
  },
  {
    name: 'Jun',
    Users: 13000,
  },
  {
    name: 'Jul',
    Users: 18156,
  },
  {
    name: 'Aug',
    Users: 21230,
  },
  {
    name: 'Sep',
    Users: 23000,
  },
  {
    name: 'Oct',
    Users: 25400,
  },
  {
    name: 'Nov',
    Users: 31230,
  },
  {
    name: 'Dec',
    Users: 29450,
  },
];

export default class LineCharts extends PureComponent {
  

  render() {
    return (
        <>
             <UsersNumber />
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Users" stroke="#8884d8"  activeDot={{ r: 5 }}/>
                </LineChart>
            </ResponsiveContainer>
      </>
    );
  }
}
