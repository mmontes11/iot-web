import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

const DatePicker = ({ selected, onChange }) => (
    <ReactDatePicker
        selected={selected}
        onChange={date => onChange(date)}
        showTimeSelect
        timeFormat="hh:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd hh:mm"
        timeCaption="Time"
    />
);

DatePicker.propTypes = {
    selected: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
};

export default DatePicker;