import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import StatsParamsPanel from "containers/statsParamsPanel";
import FiltersPanel from "components/filtersPanel";
import BarChart from "components/barChart";
import Loader from "components/loader";
import * as statsActions from "actions/stats";
import * as commonActions from "actions/common";
import * as reducerHelpers from "reducers";

const renderChart = (stats, isLoading) => {
  if (isLoading) {
    return <Loader />;
  } else if (stats) {
    return stats.map(statsItem => (
      <BarChart key={btoa(`${statsItem.title.type}-${statsItem.title.thing}`)} stats={statsItem} />
    ));
  }
  return null;
};

const Stats = ({ stats, isLoading, getStats, reset }) => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <StatsParamsPanel onParamsSelected={() => getStats()} onReset={() => reset()} />
        {renderChart(stats, isLoading)}
      </div>
      <div className="column is-one-quarter">
        <FiltersPanel />
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getStats: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    stats: state.stats.items,
    isLoading: state.stats.isLoading && reducerHelpers.isLoading(state),
  }),
  { ...statsActions, ...commonActions },
);

export default compose(
  withConnect,
  withRouter,
  withResetOnUnmount,
)(Stats);
