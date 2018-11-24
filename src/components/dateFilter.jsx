import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Dropdown from "components/dropdown";
import DatePicker from "components/datePicker";
import { DATE_FILTER_TYPE } from "constants/filterTypes";

const DateFilter = ({ dateFilter }) => {
  const timePeriodClass = classNames("button", { "is-selected is-info": dateFilter.selector.isTimePeriodSelected });
  const customClass = classNames("button", { "is-selected is-info": dateFilter.selector.isCustomSelected });
  const deleteFilter = () => {
    dateFilter.onDelete(DATE_FILTER_TYPE);
  };
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-10 is-center">
          <div className="buttons has-addons">
            <button className={timePeriodClass} onClick={() => dateFilter.selector.onTimePeriodClick()}>
              Time Period
            </button>
            <button className={customClass} onClick={() => dateFilter.selector.onCustomClick()}>
              Custom
            </button>
          </div>
        </div>
        <div className="column is-center is-2">
          <button className="delete is-medium" onClick={() => deleteFilter()} tabIndex={0}>
            Delete
          </button>
        </div>
      </div>
      {dateFilter.selector.isTimePeriodSelected && (
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
        <div className="columns">
          <div className="column">
            <DatePicker
                selected={new Date()}
                onChange={() => undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
};

DateFilter.propTypes = {
  dateFilter: PropTypes.shape({
    selector: PropTypes.shape({
      isTimePeriodSelected: PropTypes.bool.isRequired,
      isCustomSelected: PropTypes.bool.isRequired,
      onTimePeriodClick: PropTypes.func.isRequired,
      onCustomClick: PropTypes.func.isRequired,
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
    custom: PropTypes.shape({}).isRequired,
    onDelete: PropTypes.func.isRequired,
  }).isRequired,
};

export default DateFilter;
