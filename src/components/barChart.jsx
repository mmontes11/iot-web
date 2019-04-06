import React from "react";
import PropTypes from "prop-types";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colorForIndex } from "helpers/chart";

const BarChart = ({ data }) => {
  const dataElement = data[0];
  const thingKey = "thing";
  const barKeys = Object.keys(dataElement).filter(key => key !== thingKey);
  return (
    <ResponsiveContainer>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={thingKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {barKeys.map((barKey, index) => (
          <Bar key={barKey} dataKey={barKey} fill={colorForIndex(index)} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default BarChart;
