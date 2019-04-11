import React from "react";
import PropTypes from "prop-types";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colorForIndex } from "helpers/chart";
import { formatDate } from "helpers/date";
import { injectIntl, intlShape } from "react-intl";

const dataKey = (item, thing) => {
  const data = item.values.find(el => el.thing === thing);
  if (data) {
    return data.value;
  }
  return null;
};

const axisProps = {
  axisLine: false,
  tickLine: false,
};

const LineChart = ({ intl: { formatMessage }, data, things }) => (
  <ResponsiveContainer>
    <RechartsLineChart data={data}>
      <XAxis dataKey="phenomenonTime" tickFormatter={item => formatDate(item)} {...axisProps} />
      <YAxis {...axisProps} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {things.map((thing, index) => (
        <Line
          key={thing}
          name={formatMessage({ id: thing, defaultMessage: thing })}
          type="monotone"
          strokeWidth={3}
          dot={false}
          dataKey={item => dataKey(item, thing)}
          stroke={colorForIndex(index)}
        />
      ))}
    </RechartsLineChart>
  </ResponsiveContainer>
);

LineChart.propTypes = {
  intl: intlShape.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  things: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default injectIntl(LineChart);
