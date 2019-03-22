import React from "react";
import { connect } from "react-redux";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import FiltersPanel from "components/filtersPanel";
import * as filterActions from "actions/filters";
import * as thingFilterActions from "actions/thingFilter";
import * as dateFilterActions from "actions/dateFilter";
import { THING_FILTER_TYPE, DATE_FILTER_TYPE } from "constants/filterTypes";

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
        onFiltersChange(
          item,
          dateFilter.timePeriod.selectedItem,
          dateFilter.custom.startDate,
          dateFilter.custom.endDate,
        );
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
          onFiltersChange(thingFilter.selectedItem, item, dateFilter.custom.startDate, dateFilter.custom.endDate);
        },
      },
      custom: {
        startDate: {
          selected: dateFilter.custom.startDate,
          onChange: date => {
            updateStartDate(date);
            onFiltersChange(
              thingFilter.selectedItem,
              dateFilter.timePeriod.selectedItem,
              date,
              dateFilter.custom.endDate,
            );
          },
        },
        endDate: {
          selected: dateFilter.custom.endDate,
          onChange: date => {
            updateEndDate(date);
            onFiltersChange(
              thingFilter.selectedItem,
              dateFilter.timePeriod.selectedItem,
              dateFilter.custom.startDate,
              date,
            );
          },
        },
      },
      onDelete: item => {
        deleteFilterType(item);
        if (item === THING_FILTER_TYPE) {
          onFiltersChange(
            undefined,
            dateFilter.timePeriod.selectedItem,
            dateFilter.custom.startDate,
            dateFilter.custom.endDate,
          );
        } else if (item === DATE_FILTER_TYPE) {
          onFiltersChange(thingFilter.selectedItem);
        }
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
  withConnect,
  withResetOnUnmount,
)(StatsFiltersPanel);
