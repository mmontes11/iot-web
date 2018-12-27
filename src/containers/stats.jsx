import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import StatsParamsPanel from "containers/statsParamsPanel";
import StatsFiltersPanel from "containers/statsFiltersPanel";
import BarChart from "components/barChart";
import Loader from "components/loader";
import * as statsActions from "actions/stats";
import { updateParams } from "actions/params";
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

class Stats extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { type, observation },
      },
    } = this.props;
    if (type && observation) {
      this.props.updateParams(type, observation);
      this.props.getStats();
    }
  }
  componentDidUpdate() {
    const {
      match: {
        params: { type, observation },
      },
      hasError,
    } = this.props;
    if (type && observation && hasError) {
      this.props.history.push("/stats");
    }
  }
  render() {
    const { stats, isLoading, getStats, reset } = this.props;
    return (
      <div className="container is-fluid section">
        <div className="columns">
          <div className="column is-three-quarters">
            <StatsParamsPanel 
              onParamsSelected={(type, observation) => {
                this.props.history.push(`/stats/${type}/${observation}`);
                getStats()
              }} 
              onReset={() => reset()} 
            />
            {renderChart(stats, isLoading)}
          </div>
          <div className="column is-one-quarter">
            <StatsFiltersPanel onFiltersChange={() => getStats()} />
          </div>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  getStats: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  updateParams: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const withConnect = connect(
  state => ({
    stats: state.stats.items,
    isLoading: state.stats.isLoading && reducerHelpers.isLoading(state),
    hasError: reducerHelpers.hasError(state)
  }),
  { ...statsActions, ...commonActions, updateParams },
);

export default compose(
  withConnect,
  withRouter,
  withResetOnUnmount,
)(Stats);
