import React, { Component } from "react";
import PropTypes from "prop-types";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { connect } from "react-redux";
import { compose } from "recompose";
import RealTimeParamsPanel from "containers/realTimeParamsPanel";
import * as dataActions from "actions/data";
import * as commonActions from "actions/common";

class RealTime extends Component {
  componentWillUnmount() {
    this.props.finishRealTimeData();
  }
  render() {
    const { startRealTimeData, finishRealTimeData, resetData, reset } = this.props;
    return (
      <div className="container is-fluid section">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <RealTimeParamsPanel
              onParamsSelected={() => {
                resetData();
                startRealTimeData();
              }}
              onReset={() => {
                reset();
                finishRealTimeData();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

RealTime.propTypes = {
  startRealTimeData: PropTypes.func.isRequired,
  finishRealTimeData: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const withConnect = connect(
  null,
  { ...dataActions, reset: commonActions.reset },
);

export default compose(
  withConnect,
  withResetOnUnmount,
)(RealTime);
