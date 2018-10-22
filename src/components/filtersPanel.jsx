import React from "react";
import PropTypes from "prop-types";
import Dropdown from "components/dropdown";
import ThingFilter from "components/thingFilter";
import DateFilter from "components/dateFilter";
import { THING_FILTER_TYPE, DATE_FILTER_TYPE } from "constants/filterTypes";

const getFilter = (filterType, thingFilter) => {
  switch (filterType) {
    case THING_FILTER_TYPE:
      return <ThingFilter key={filterType} thingFilter={thingFilter} />;
    case DATE_FILTER_TYPE:
      return <DateFilter key={filterType} />;
    default:
      return null;
  }
};

const FiltersPanel = ({ type, selectedFilters, thingFilter }) => (
  <div className="box">
    <Dropdown {...type} label="Filters" buttonStyle="is-primary" iconStyle="fa-plus" isLoading={false} />
    {selectedFilters.map(filterType => getFilter(filterType, thingFilter))}
  </div>
);

FiltersPanel.propTypes = {
  type: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    isActive: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
  }).isRequired,
  thingFilter: PropTypes.shape({}).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FiltersPanel;
