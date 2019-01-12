import React from "react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const titleForStats = title => {
  let titleText = `${title.type} stats of ${title.thing}`;
  if (title.unit) {
    titleText += ` (${title.unit.symbol})`;
  }
  return titleText;
};

const BarChart = props => (
  <div className="box">
    <div className="columns">
      <div className="column">
        <p className="title is-3 has-text-primary has-text-centered is-spaced">{titleForStats(props.stats.title)}</p>
        <div className="barchart">
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
  </div>
);

BarChart.propTypes = {
  stats: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default BarChart;
