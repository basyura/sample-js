import React from 'react'
import { PieChart, Pie } from 'recharts'
import Label from './Label'

class MyPieChart extends React.Component {

  constructor(props) {
    super(props)

    this.data01 = [{name: "A", value: 10}, {name: "B", value: 20}, {name: "C", value: 30}, {name: "D", value: 40}, {name: "E", value: 50}]
  }

  render() {

    // https://github.com/recharts/recharts/issues/490

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, color, startAngle, endAngle}) => {
        const RADIAN = Math.PI / 180;
        const diffAngle = endAngle - startAngle;
        const delta = ((360-diffAngle)/15)-1;
        const radius = innerRadius + (outerRadius - innerRadius);
        const x = cx + (radius+delta) * Math.cos(-midAngle * RADIAN);
        const y = cy + (radius+(delta*delta)) * Math.sin(-midAngle * RADIAN);

    console.log(`text : value=${value}, x=${x}, y=${y}`)
        return (
          <text x={x} y={y} fill={color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontWeight="normal">
          {value}
            </text>
          );
    };
    const renderCustomizedLabelLine = (props) => {
      let { cx, cy, midAngle, innerRadius, outerRadius, color, startAngle, endAngle } = props;
      const RADIAN = Math.PI / 180;
      const diffAngle = endAngle - startAngle;
      const radius = innerRadius + (outerRadius - innerRadius);
      let path='';
      for(let i=0;i<((360-diffAngle)/15);i++){
        path += `${(cx + (radius+i) * Math.cos(-midAngle * RADIAN))},${(cy + (radius+i*i) * Math.sin(-midAngle * RADIAN))} `
      }
    //console.log(path)
    return (
      <polyline points={path} stroke={color} fill="none" />
    );
    }

    return (
      <div align="center">
        http://recharts.org/en-US/api/PieChart

        <PieChart width={700} height={700}>
          <Pie data={this.data01} dataKey="value" nameKey="name" label={renderCustomizedLabel} labelLine={renderCustomizedLabelLine}/>
        </PieChart>
      </div>
    )
  }
}

export default MyPieChart
