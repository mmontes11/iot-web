import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "components/loader";
import ChartBox from "components/chartBox";
import BarChart from "components/barChart";
import LineChart from "components/lineChart";
import { BARCHART, LINECHART } from "constants/chartTypes";

const Charts = ({ chartType, items, things, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (items === null || items.length === 0) {
    return null;
  }
  switch (chartType) {
    case BARCHART:
      return items.map(({ type, unit, data }) => (
        <ChartBox key={type} type={type} unit={unit}>
          <BarChart data={data} />
        </ChartBox>
      ));
    case LINECHART: {
      if (things === null || things.length === 0) {
        return null;
      }
      return items.map(({ type, unit, items: data }) => (
        <ChartBox key={type} type={type} unit={unit}>
          <LineChart data={data} things={things} />
        </ChartBox>
      ));
    }
    default:
      return null;
  }
};

Charts.propTypes = {
  chartType: PropTypes.oneOf([BARCHART, LINECHART]).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  things: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool.isRequired,
};

Charts.defaultProps = {
  items: null,
  things: null,
};

const withConnect = connect(state => ({
  items: state.data.items,
  things: state.data.things,
  isLoading: state.data.isLoading,
}));

export default withConnect(Charts);
