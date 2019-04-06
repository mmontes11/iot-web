import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { handleDataParams } from "hocs/dataParams";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import store from "config/store";
import { getData } from "actions/data";
import { reset } from "actions/common";
import DataParamsPanel from "containers/dataParamsPanel";
import FiltersPanelContainer from "containers/filtersPanelContainer";
import Charts from "containers/charts";
import { LINECHART } from "constants/chartTypes";

const Data = ({ onParamsSelected, onFiltersSelected, onReset }) => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <DataParamsPanel onParamsSelected={onParamsSelected} onReset={onReset} />
        <Charts chartType={LINECHART} />
      </div>
      <div className="column is-one-quarter">
        <FiltersPanelContainer onFiltersSelected={onFiltersSelected} />
      </div>
    </div>
  </div>
);

Data.propTypes = {
  onParamsSelected: PropTypes.func.isRequired,
  onFiltersSelected: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const withDataParams = handleDataParams("data", () => store.dispatch(getData()), () => store.dispatch(reset()));

export default compose(
  withDataParams,
  withResetOnUnmount,
)(Data);
