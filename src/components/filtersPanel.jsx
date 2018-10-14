import React from "react";
import PropTypes from "prop-types";
import Dropdown from "components/dropdown";

const FiltersPanel = ({ type }) => (
  <div className="box">
    <Dropdown {...type} label="Filters" buttonStyle="is-primary" iconStyle="fa-plus" isLoading={false} />
  </div>
);

FiltersPanel.propTypes = {
  type: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    isActive: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default FiltersPanel;
