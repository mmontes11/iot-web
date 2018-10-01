import React from "react";
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

const BarChart = () => {
  const data = [
    { name: "avg", value: 1000 },
    { name: "min", value: 300 },
    { name: "max", value: 800 },
    { name: "stdDev", value: 600 }
  ];
  return (
    <div className="box">
      <div className="columns">
        <div className="column barchart">
          <ResponsiveContainer>
            <RechartsBarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#70c1b3" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
