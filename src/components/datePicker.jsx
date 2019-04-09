import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

const DatePicker = ({ intl: { formatMessage }, placeholder, selected, onChange }) => (
  <ReactDatePicker
    selected={selected}
    onChange={date => onChange(date)}
    showTimeSelect
    timeFormat="hh:mm"
    timeIntervals={15}
    dateFormat="yyyy-MM-dd hh:mm"
    placeholderText={placeholder}
    timeCaption={formatMessage({ id: "Time" })}
  />
);

DatePicker.propTypes = {
  intl: intlShape.isRequired,
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  selected: null,
};

export default injectIntl(DatePicker);
