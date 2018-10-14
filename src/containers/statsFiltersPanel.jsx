import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";
import PropTypes from "prop-types";
import FiltersPanel from "components/filtersPanel";
import * as filterActions from "actions/filters";

const StatsFiltersPanel = ({ type, selectFilterType, addFilterType }) => (
  <FiltersPanel
    type={{
      ...type,
      onButtonClick: () => selectFilterType(),
      onItemClick: item => addFilterType(item),
    }}
  />
);

StatsFiltersPanel.propTypes = {
  type: PropTypes.shape({}).isRequired,
  selectFilterType: PropTypes.func.isRequired,
  addFilterType: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    type: state.stats.filters.type,
  }),
  { ...filterActions },
);

export default compose(
  withRouter,
  withConnect,
  withResetOnUnmount,
)(StatsFiltersPanel);
