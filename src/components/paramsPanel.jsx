import React from "react";
import Dropdown from "components/dropdown";
import PropTypes from "prop-types";

const ParamsPanel = ({ statsType, observationType, reset }) => (
  <div className="box">
    <div className="columns">
      <div className="column is-5">
        <Dropdown
          label={statsType.label}
          items={statsType.items}
          isActive={statsType.isActive}
          isLoading={false}
          isDisabled={false}
          onButtonClick={() => statsType.onButtonClick()}
          onItemClick={() => statsType.onItemClick()}
        />
      </div>
      <div className="column is-5">
        <Dropdown
          label={observationType.label}
          items={observationType.items}
          isActive={observationType.isActive}
          isLoading={observationType.isLoading}
          isDisabled={observationType.isDisabled}
          onButtonClick={() => observationType.onButtonClick()}
          onItemClick={() => observationType.onItemClick()}
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
  statsType: PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isActive: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }).isRequired,
  observationType: PropTypes.shape({
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
