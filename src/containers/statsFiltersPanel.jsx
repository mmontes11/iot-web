import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import FiltersPanel from "components/filtersPanel";
import * as filterActions from "actions/filters";
import * as thingFilterActions from "actions/thingFilter";

const StatsFiltersPanel = ({
  onFiltersChange,
  type,
  statsType,
  thingFilter,
  selectedFilters,
  selectFilterType,
  addFilterType,
  deleteFilterType,
  selectThingFilter,
  updateThingFilter,
}) => (
  <FiltersPanel
    type={{
      ...type,
      onButtonClick: () => selectFilterType(),
      onItemClick: item => addFilterType(item),
    }}
    thingFilter={{
      ...thingFilter,
      label: thingFilter.selectedItem || "Select Thing Filter: ",
      onButtonClick: () => selectThingFilter(statsType, thingFilter.isActive),
      onItemClick: item => {
        updateThingFilter(item);
        onFiltersChange();
      },
      onDelete: item => {
        deleteFilterType(item);
        onFiltersChange();
      },
    }}
    selectedFilters={selectedFilters}
  />
);

StatsFiltersPanel.propTypes = {
  onFiltersChange: PropTypes.func.isRequired,
  type: PropTypes.shape({}).isRequired,
  statsType: PropTypes.string,
  thingFilter: PropTypes.shape({}).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectFilterType: PropTypes.func.isRequired,
  addFilterType: PropTypes.func.isRequired,
  deleteFilterType: PropTypes.func.isRequired,
  selectThingFilter: PropTypes.func.isRequired,
  updateThingFilter: PropTypes.func.isRequired,
};

StatsFiltersPanel.defaultProps = {
  statsType: null,
};

const withConnect = connect(
  state => ({
    type: state.stats.filters.type,
    statsType: state.stats.params.type.selectedItem,
    thingFilter: state.stats.filters.thingFilter,
    selectedFilters: state.stats.filters.items,
  }),
  { ...filterActions, ...thingFilterActions },
);

export default compose(
  withRouter,
  withConnect,
  withResetOnUnmount,
)(StatsFiltersPanel);
