import React from "react";
import PropTypes from "prop-types";

const titleForStats = (type, unit) => {
  let title = `${type}`;
  if (unit) {
    title += ` (${unit.symbol})`;
  }
  return title;
};

const ChartBox = ({ type, unit, children }) => (
  <div className="box">
    <div className="columns">
      <div className="column">
        <p className="title is-3 has-text-primary has-text-centered is-spaced">{titleForStats(type, unit)}</p>
        <div className="chart">{children}</div>
      </div>
    </div>
  </div>
);

ChartBox.propTypes = {
  type: PropTypes.string.isRequired,
  unit: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

ChartBox.defaultProps = {
  unit: null,
};

export default ChartBox;
