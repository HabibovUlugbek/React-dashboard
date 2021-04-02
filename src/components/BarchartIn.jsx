import React, { PureComponent } from "react";
import BarChartInfo from './BarChartInfo'
import {  BarChart,  Bar,  XAxis, Tooltip,  Legend,  ResponsiveContainer} from "recharts";

const data = [
  {
    name: "Jan",
    money: 1900,
  },
  {
    name: "Feb",
    money: 2200,
  },
  {
    name: "Mar",
    money: 2500,
  },
  {
    name: "Apr",
    money: 8000,
  },
  {
    name: "May",
    money: 6000,
  },
  {
    name: "Jun",
    money: 5500,
  },
  {
    name: "Jul",
    money: 6300,
  },
  {
    name: "Aug",
    money: 2000,
  },
  {
    name: "Sep",
    money: 4000,
  },
  {
    name: "Oct",
    money: 5000,
  },
  {
    name: "Nov",
    money: 3300,
  },
  {
    name: "Dec",
    money: 4500,
  },
];

export default class BarchartIn extends PureComponent {
  render() {
    return (
        <>
            <BarChartInfo />
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="money" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>


      </>
    );
  }
}
