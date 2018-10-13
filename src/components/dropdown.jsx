import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Dropdown = ({ label, items, isActive, isLoading, isDisabled, onButtonClick, onItemClick }) => {
  const dropdownClass = classNames("dropdown", { "is-active": isActive });
  const buttonClass = classNames("button", { "is-loading": isLoading });
  return (
    <div className={dropdownClass}>
      <div className="dropdown-trigger">
        <button
          className={buttonClass}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => onButtonClick()}
          disabled={isDisabled}
        >
          <span>{label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {items &&
            items.map(item => (
              <div
                key={btoa(item)}
                className="dropdown-item"
                onClick={() => {
                  onItemClick(item);
                }}
                onKeyPress={() => onItemClick(item)}
                role="button"
                tabIndex={0}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Dropdown;
