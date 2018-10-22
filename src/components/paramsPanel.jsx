import React from "react";
import PropTypes from "prop-types";
import Dropdown from "components/dropdown";

const ParamsPanel = ({ type, observation, reset }) => (
  <div className="box">
    <div className="columns">
      <div className="column is-5">
        <Dropdown
          {...type}
          iconStyle="fa-angle-down"
          isLoading={false}
          isDisabled={false}
          onButtonClick={() => type.onButtonClick()}
          onItemClick={item => type.onItemClick(item)}
        />
      </div>
      <div className="column is-5">
        <Dropdown
          {...observation}
          iconStyle="fa-angle-down"
          onButtonClick={() => observation.onButtonClick()}
          onItemClick={item => observation.onItemClick(item)}
        />
      </div>
      <div className="column">
        <button className="button is-warning is-fullwidth" disabled={reset.isDisabled} onClick={() => reset.onReset()}>
          <span>Reset</span>
          <span className="icon is-small">
            <i className="fas fa-eraser" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

ParamsPanel.propTypes = {
  type: PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isActive: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }).isRequired,
  observation: PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isActive: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }).isRequired,
  reset: PropTypes.shape({
    isDisabled: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
  }).isRequired,
};

export default ParamsPanel;
