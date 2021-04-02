import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import PieChartType from './PieChartType';

const data = [
  { name: 'Active Users', value: 58 },
  { name: 'Users', value: 42 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={'#0088FE'}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 8}
        fill={"#00C49F"}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none " />
      <circle cx={ex+5} cy={ey} r={3} fill={fill} stroke="none" />
      <text x={ex + 13 + (cos >= 0 ? 1 : -1) * 12} y={ey - 6} textAnchor={textAnchor} fill="#333">{`Users ${value}`}</text>
      <text x={ex + 13 +(cos >= 0 ? 1 : -1) * 12} y={ey} dy={9} textAnchor={textAnchor} fill="#999">
        {`(Rate ${Math.ceil(percent * 100)}%)`}
      </text>
    </g>
  );
};

export default class PieChartExample extends PureComponent {
  
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
        <>
            <PieChartType />
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#ccc"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                />
                </PieChart>
            </ResponsiveContainer>
      </>
    );
  }
}
