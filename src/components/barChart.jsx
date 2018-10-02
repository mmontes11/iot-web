import React from "react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const BarChart = props => (
  <div className="box">
    <div className="columns">
      <div className="column barchart">
        <ResponsiveContainer>
          <RechartsBarChart data={props.stats.data}>
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

BarChart.propTypes = {
  stats: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default BarChart;
