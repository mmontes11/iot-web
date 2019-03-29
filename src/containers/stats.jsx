import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import QueryString from "query-string";
import PropTypes from "prop-types";
import StatsParamsPanel from "containers/statsParamsPanel";
import StatsFiltersPanel from "containers/statsFiltersPanel";
import BarChart from "components/barChart";
import Loader from "components/loader";
import * as statsActions from "actions/stats";
import * as commonActions from "actions/common";
import * as fromState from "reducers";
import { updateParams } from "actions/params";
import { addThingFilter } from "actions/thingFilter";
import { addTimePeriodFilter, addCustomTimePeriodFilter } from "actions/dateFilter";

const renderChart = (stats, isLoading) => {
  if (isLoading) {
    return <Loader />;
  } else if (stats) {
    return stats.map(statsItem => <BarChart key={statsItem.type} {...statsItem} />);
  }
  return null;
};

class Stats extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { type, observation },
      },
      location: { search },
    } = this.props;
    if (type && observation) {
      const queryParams = QueryString.parse(search);
      if (queryParams.thing) {
        this.props.addThingFilter(queryParams.thing);
      }
      if (queryParams.timePeriod) {
        this.props.addTimePeriodFilter(queryParams.timePeriod);
      } else if (queryParams.startDate || queryParams.endDate) {
        this.props.addCustomTimePeriodFilter(queryParams.startDate, queryParams.endDate);
      }
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
  _onParamsSelected = (type, observation) => {
    const { getStats, history, location } = this.props;
    history.push(`/stats/${type}/${observation}${location.search}`);
    getStats();
  };
  _onFiltersChange = (thing, timePeriod, startDate, endDate) => {
    const {
      getStats,
      location: { pathname },
    } = this.props;
    const params = {};
    if (thing) {
      params.thing = thing;
    }
    if (timePeriod) {
      params.timePeriod = timePeriod;
    }
    if (startDate) {
      params.startDate = startDate.toISOString();
    }
    if (endDate) {
      params.endDate = endDate.toISOString();
    }
    if (thing || timePeriod || startDate || endDate) {
      const search = Object.keys(params)
        .map(p => `${encodeURIComponent(p)}=${encodeURIComponent(params[p])}`)
        .join("&");
      this.props.history.push(`${pathname}?${search}`);
    } else {
      this.props.history.push(pathname);
    }
    getStats();
  };
  render() {
    const { stats, isLoading, reset } = this.props;
    return (
      <div className="container is-fluid section">
        <div className="columns">
          <div className="column is-three-quarters">
            <StatsParamsPanel onParamsSelected={this._onParamsSelected} onReset={() => reset()} />
            {renderChart(stats, isLoading)}
          </div>
          <div className="column is-one-quarter">
            <StatsFiltersPanel onFiltersChange={this._onFiltersChange} />
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
  addThingFilter: PropTypes.func.isRequired,
  addTimePeriodFilter: PropTypes.func.isRequired,
  addCustomTimePeriodFilter: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const withConnect = connect(
  state => ({
    stats: state.stats.items,
    isLoading: state.stats.isLoading,
    hasError: fromState.hasError(state),
  }),
  { ...statsActions, ...commonActions, updateParams, addThingFilter, addTimePeriodFilter, addCustomTimePeriodFilter },
);

export default compose(
  withConnect,
  withRouter,
  withResetOnUnmount,
)(Stats);
