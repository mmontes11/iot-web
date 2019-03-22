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
import PropTypes from "prop-types";

const titleForStats = (type, unit) => {
  let title = `${type}`;
  if (unit) {
    title += ` (${unit.symbol})`;
  }
  return title;
};

const colorForBar = index => {
  const barColors = ["#247ba0", "#70c1b3", "#b2dbbf"];
  return barColors[index % barColors.length];
};

const BarChart = ({ data, type, unit }) => {
  if (data.length === 0) {
    return null;
  }
  const dataElement = data[0];
  const thingKey = "thing";
  const barKeys = Object.keys(dataElement).filter(key => key !== thingKey);
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <p className="title is-3 has-text-primary has-text-centered is-spaced">{titleForStats(type, unit)}</p>
          <div className="barchart">
            <ResponsiveContainer>
              <RechartsBarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={thingKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {barKeys.map((barKey, index) => (
                  <Bar key={barKey} dataKey={barKey} fill={colorForBar(index)} />
                ))}
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.string.isRequired,
  unit: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }),
};

BarChart.defaultProps = {
  unit: null,
};

export default BarChart;
