import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import ParamsPanel from "components/paramsPanel";
import * as paramsActions from "actions/params";

const ParamsPanelContainer = ({
  onParamsSelected,
  onReset,
  type,
  observation,
  isResetDisabled,
  selectType,
  updateType,
  selectObservation,
  updateObservation,
}) => (
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
        onParamsSelected();
      },
    }}
    reset={{
      isDisabled: isResetDisabled,
      onReset: () => onReset(),
    }}
  />
);

const withConnect = connect(
  state => ({
    type: state.stats.params.type,
    observation: state.stats.params.observation,
    isResetDisabled: state.stats.params.reset.isDisabled,
  }),
  { ...paramsActions },
);

ParamsPanelContainer.propTypes = {
  onParamsSelected: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  type: PropTypes.shape({}).isRequired,
  observation: PropTypes.shape({}).isRequired,
  isResetDisabled: PropTypes.bool.isRequired,
  selectType: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
  selectObservation: PropTypes.func.isRequired,
  updateObservation: PropTypes.func.isRequired,
};

export default compose(
  withConnect,
  withRouter,
  withResetOnUnmount,
)(ParamsPanelContainer);
