import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { handleDataParams } from "hocs/dataParams";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import store from "config/store";
import { getStats } from "actions/data";
import { reset } from "actions/common";
import StatsParamsPanel from "containers/statsParamsPanel";
import StatsFiltersPanel from "containers/statsFiltersPanel";
import Charts from "containers/charts";
import { BARCHART } from "constants/chartTypes";

const Stats = ({ onParamsSelected, onFiltersSelected, onReset }) => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <StatsParamsPanel onParamsSelected={onParamsSelected} onReset={onReset} />
        <Charts chartType={BARCHART} />
      </div>
      <div className="column is-one-quarter">
        <StatsFiltersPanel onFiltersSelected={onFiltersSelected} />
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  onParamsSelected: PropTypes.func.isRequired,
  onFiltersSelected: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const withDataParams = handleDataParams("stats", () => store.dispatch(getStats()), () => store.dispatch(reset()));

export default compose(
  withDataParams,
  withResetOnUnmount,
)(Stats);
