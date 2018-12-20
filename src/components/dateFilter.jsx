import React from "react";
import PropTypes from "prop-types";
import Dropdown from "components/dropdown";
import DatePicker from "components/datePicker";
import { DATE_FILTER_TYPE } from "constants/filterTypes";

const DateFilter = ({ dateFilter }) => {
  const deleteFilter = () => {
    dateFilter.onDelete(DATE_FILTER_TYPE);
  };
  return (
    <div className="box date-filter">
      {!dateFilter.selector.isCustomSelected && (
        <div className="columns">
          <div className="column">
            <Dropdown
              {...dateFilter.timePeriod}
              iconStyle="fa-angle-down"
              onButtonClick={() => dateFilter.timePeriod.onButtonClick()}
              onItemClick={item => dateFilter.timePeriod.onItemClick(item)}
            />
          </div>
        </div>
      )}
      {dateFilter.selector.isCustomSelected && (
        <div>
          <div className="columns">
            <div className="column">
              <DatePicker
                placeholder="Select start date:"
                selected={dateFilter.custom.startDate.selected}
                onChange={date => dateFilter.custom.startDate.onChange(date)}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <DatePicker
                placeholder="Select end date:"
                selected={dateFilter.custom.endDate.selected}
                onChange={date => dateFilter.custom.endDate.onChange(date)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="columns">
        <div className="column is-10">
          <button className="button is-info" onClick={() => dateFilter.selector.onChange()}>
            {(dateFilter.selector.isCustomSelected && "Time Period") || "Custom"}
          </button>
        </div>
        <div className="column is-center">
          <button className="delete is-medium" onClick={() => deleteFilter()} tabIndex={0}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const dateShape = PropTypes.shape({
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
});

DateFilter.propTypes = {
  dateFilter: PropTypes.shape({
    selector: PropTypes.shape({
      isCustomSelected: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
    }).isRequired,
    timePeriod: PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      isActive: PropTypes.bool.isRequired,
      isLoading: PropTypes.bool.isRequired,
      isDisabled: PropTypes.bool.isRequired,
      onButtonClick: PropTypes.func.isRequired,
      onItemClick: PropTypes.func.isRequired,
    }).isRequired,
    custom: PropTypes.shape({
      startDate: dateShape,
      endDate: dateShape,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  }).isRequired,
};

export default DateFilter;
