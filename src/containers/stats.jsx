import React from "react";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { handleDataParams } from "hocs/dataParams";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import store from "config/store";
import { getStats } from "actions/data";
import { reset } from "actions/common";
import StatsParamsPanel from "containers/statsParamsPanel";
import StatsFiltersPanel from "containers/statsFiltersPanel";
import BarChart from "components/barChart";
import Loader from "components/loader";

const renderChart = (items, isLoading) => {
  if (isLoading) {
    return <Loader />;
  } else if (items) {
    return items.map(item => <BarChart key={item.type} {...item} />);
  }
  return null;
};

const Stats = ({ items, isLoading, onParamsSelected, onFiltersSelected, onReset }) => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <StatsParamsPanel onParamsSelected={onParamsSelected} onReset={onReset} />
        {renderChart(items, isLoading)}
      </div>
      <div className="column is-one-quarter">
        <StatsFiltersPanel onFiltersSelected={onFiltersSelected} />
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onParamsSelected: PropTypes.func.isRequired,
  onFiltersSelected: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const withDataParams = handleDataParams("stats", () => store.dispatch(getStats()), () => store.dispatch(reset()));

export default compose(
  withDataParams,
  withResetOnUnmount,
)(Stats);
