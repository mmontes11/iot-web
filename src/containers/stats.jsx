import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import ParamsPanel from "components/paramsPanel";
import FiltersPanel from "components/filtersPanel";
import * as paramsActions from "actions/params";
import * as commonActions from "actions/common";
import * as statsActions from "actions/stats";

const Stats = ({
  type,
  observation,
  isResetDisabled,
  selectType,
  updateType,
  selectObservation,
  updateObservation,
  getStats,
  reset,
}) => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <ParamsPanel
          type={{
            ...type,
            label: type.selectedItem || "Select type",
            onButtonClick: () => selectType(),
            onItemClick: item => updateType(item),
          }}
          observation={{
            ...observation,
            label: observation.selectedItem || "Select observation",
            onButtonClick: () => selectObservation(),
            onItemClick: item => {
              updateObservation(item);
              getStats();
            },
          }}
          reset={{
            isDisabled: isResetDisabled,
            onReset: () => reset(),
          }}
        />
      </div>
      <div className="column is-one-quarter">
        <FiltersPanel />
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  type: PropTypes.shape({}).isRequired,
  observation: PropTypes.shape({}).isRequired,
  isResetDisabled: PropTypes.bool.isRequired,
  selectType: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
  selectObservation: PropTypes.func.isRequired,
  updateObservation: PropTypes.func.isRequired,
  getStats: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    type: state.stats.params.type,
    observation: state.stats.params.observation,
    isResetDisabled: state.stats.params.reset.isDisabled,
  }),
  { ...paramsActions, ...commonActions, ...statsActions },
);

export default compose(
  withConnect,
  withRouter,
  withResetOnUnmount,
)(Stats);
