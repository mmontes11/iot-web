import React from "react";
import { connect } from "react-redux";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import ParamsPanel from "components/paramsPanel";
import * as paramsActions from "actions/params";
import * as fromState from "reducers";
import { TYPE, OBSERVATION, GROUPBY } from "constants/params";
import { isObservationDisabled } from "helpers/paramsPanel";

const DataParamsPanel = ({
  onParamsSelected,
  onReset,
  type,
  observation,
  groupBy,
  isResetDisabled,
  selectType,
  updateType,
  selectObservation,
  updateObservation,
  selectGroupBy,
  updateGroupBy,
}) => (
  <ParamsPanel
    params={[
      {
        key: "type",
        label: type.selectedItem || "Select type",
        items: type.items || [],
        isActive: type.isActive || false,
        isLoading: type.isLoading || false,
        isDisabled: type.isDisabled || false,
        onButtonClick: () => selectType(),
        onItemClick: item => updateType(item),
      },
      {
        key: "observation",
        label: observation.selectedItem || "Select observation",
        items: observation.items || [],
        isActive: observation.isActive || false,
        isLoading: observation.isLoading || false,
        isDisabled: isObservationDisabled(observation),
        onButtonClick: () => selectObservation(),
        onItemClick: item => {
          updateObservation(item);
          onParamsSelected(type.selectedItem, item, groupBy.selectedItem);
        },
      },
      {
        key: "groupBy",
        label: groupBy.selectedItem || "Group by",
        items: groupBy.items || [],
        isActive: groupBy.isActive || false,
        isLoading: groupBy.isLoading || false,
        isDisabled: groupBy.isDisabled || false,
        onButtonClick: () => selectGroupBy(),
        onItemClick: item => {
          updateGroupBy(item);
          onParamsSelected(type.selectedItem, observation.selectedItem, item);
        },
      },
    ]}
    reset={{
      isDisabled: isResetDisabled,
      onReset: () => onReset(),
    }}
  />
);

const withConnect = connect(
  state => ({
    type: fromState.getParam(state, TYPE),
    observation: fromState.getParam(state, OBSERVATION),
    groupBy: fromState.getParam(state, GROUPBY),
    isResetDisabled: fromState.isResetDisabled(state),
  }),
  { ...paramsActions },
);

DataParamsPanel.propTypes = {
  onParamsSelected: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  type: PropTypes.shape({}).isRequired,
  observation: PropTypes.shape({}).isRequired,
  groupBy: PropTypes.shape({}).isRequired,
  isResetDisabled: PropTypes.bool.isRequired,
  selectType: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
  selectObservation: PropTypes.func.isRequired,
  updateObservation: PropTypes.func.isRequired,
  selectGroupBy: PropTypes.func.isRequired,
  updateGroupBy: PropTypes.func.isRequired,
};

export default compose(
  withConnect,
  withResetOnUnmount,
)(DataParamsPanel);