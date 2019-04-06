import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "components/loader";
import ChartBox from "components/chartBox";
import BarChart from "components/barChart";
import { BARCHART } from "constants/chartTypes";

const Charts = ({ chartType, items, isLoading }) => {
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
    default:
      return null;
  }
};

Charts.propTypes = {
  chartType: PropTypes.oneOf([BARCHART]).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
};

Charts.defaultProps = {
  items: null,
};

const withConnect = connect(state => ({
  items: state.data.items,
  isLoading: state.data.isLoading,
}));

export default withConnect(Charts);
