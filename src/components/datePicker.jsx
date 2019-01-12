import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

const DatePicker = ({ placeholder, selected, onChange }) => (
  <ReactDatePicker
    selected={selected}
    onChange={date => onChange(date)}
    showTimeSelect
    timeFormat="hh:mm"
    timeIntervals={15}
    dateFormat="yyyy-MM-dd hh:mm"
    placeholderText={placeholder}
    timeCaption="Time"
  />
);

DatePicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  selected: null,
};

export default DatePicker;
