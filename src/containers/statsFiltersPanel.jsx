import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import FiltersPanel from "components/filtersPanel";
import * as filterActions from "actions/filters";
import * as thingFilterActions from "actions/thingFilter";
import * as dateFilterActions from "actions/dateFilter";

const StatsFiltersPanel = ({
  onFiltersChange,
  type,
  statsType,
  thingFilter,
  dateFilter,
  selectedFilters,
  selectFilterType,
  addFilterType,
  deleteFilterType,
  selectThingFilter,
  updateThingFilter,
  toggleDateFilterType,
  selectTimePeriod,
  updateTimePeriod,
  updateStartDate,
  updateEndDate,
}) => (
  <FiltersPanel
    type={{
      ...type,
      onButtonClick: () => selectFilterType(),
      onItemClick: item => addFilterType(item),
    }}
    thingFilter={{
      ...thingFilter,
      label: thingFilter.selectedItem || "Select Thing: ",
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
    dateFilter={{
      ...dateFilter,
      selector: {
        isCustomSelected: dateFilter.isCustomSelected,
        onChange: () => toggleDateFilterType(),
      },
      timePeriod: {
        ...dateFilter.timePeriod,
        label: dateFilter.timePeriod.selectedItem || "Select Time Period:",
        onButtonClick: () => selectTimePeriod(dateFilter.timePeriod.isActive),
        onItemClick: item => {
          updateTimePeriod(item);
          onFiltersChange();
        },
      },
      custom: {
        startDate: {
          selected: dateFilter.custom.startDate,
          onChange: date => {
            updateStartDate(date);
            onFiltersChange();
          },
        },
        endDate: {
          selected: dateFilter.custom.endDate,
          onChange: date => {
            updateEndDate(date);
            onFiltersChange();
          },
        },
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
  dateFilter: PropTypes.shape({}).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectFilterType: PropTypes.func.isRequired,
  addFilterType: PropTypes.func.isRequired,
  deleteFilterType: PropTypes.func.isRequired,
  selectThingFilter: PropTypes.func.isRequired,
  updateThingFilter: PropTypes.func.isRequired,
  toggleDateFilterType: PropTypes.func.isRequired,
  selectTimePeriod: PropTypes.func.isRequired,
  updateTimePeriod: PropTypes.func.isRequired,
  updateStartDate: PropTypes.func.isRequired,
  updateEndDate: PropTypes.func.isRequired,
};

StatsFiltersPanel.defaultProps = {
  statsType: null,
};

const withConnect = connect(
  state => ({
    type: state.stats.filters.type,
    statsType: state.stats.params.type.selectedItem,
    thingFilter: state.stats.filters.thingFilter,
    dateFilter: state.stats.filters.dateFilter,
    selectedFilters: state.stats.filters.items,
  }),
  { ...filterActions, ...thingFilterActions, ...dateFilterActions },
);

export default compose(
  withRouter,
  withConnect,
  withResetOnUnmount,
)(StatsFiltersPanel);
