import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import QueryString from "query-string";
import { updateParams } from "actions/params";
import { addThingFilter } from "actions/thingFilter";
import { addTimePeriodFilter, addCustomTimePeriodFilter } from "actions/dateFilter";
import * as fromState from "reducers";

export const handleDataParams = (path, getData, reset) => WrappedComponent => {
  class DataParams extends React.Component {
    componentDidMount() {
      const {
        match: {
          params: { type, observation },
        },
        location: { search },
      } = this.props;
      if (type && observation) {
        const queryParams = QueryString.parse(search);
        if (queryParams.thing) {
          this.props.addThingFilter(queryParams.thing);
        }
        if (queryParams.timePeriod) {
          this.props.addTimePeriodFilter(queryParams.timePeriod);
        } else if (queryParams.startDate || queryParams.endDate) {
          this.props.addCustomTimePeriodFilter(queryParams.startDate, queryParams.endDate);
        }
        this.props.updateParams(type, observation);
        getData();
      }
    }
    componentDidUpdate() {
      const {
        match: {
          params: { type, observation },
        },
        hasError,
      } = this.props;
      if (type && observation && hasError) {
        this._pushRootPath();
      }
    }
    _onParamsSelected = (type, observation) => {
      const { history, location } = this.props;
      history.push(`/${path}/${type}/${observation}${location.search}`);
      getData();
    };
    _onFiltersSelected = (thing, timePeriod, startDate, endDate) => {
      const {
        history,
        location: { pathname },
      } = this.props;
      const params = {};
      if (thing) {
        params.thing = thing;
      }
      if (timePeriod) {
        params.timePeriod = timePeriod;
      }
      if (startDate) {
        params.startDate = startDate.toISOString();
      }
      if (endDate) {
        params.endDate = endDate.toISOString();
      }
      if (thing || timePeriod || startDate || endDate) {
        const search = Object.keys(params)
          .map(p => `${encodeURIComponent(p)}=${encodeURIComponent(params[p])}`)
          .join("&");
        history.push(`${pathname}?${search}`);
      } else {
        history.push(pathname);
      }
      getData();
    };
    _onReset = () => {
      reset();
      this._pushRootPath();
    };
    _pushRootPath = () => {
      const { history } = this.props;
      history.push(`/${path}`);
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          onParamsSelected={this._onParamsSelected}
          onFiltersSelected={this._onFiltersSelected}
          onReset={this._onReset}
        />
      );
    }
  }
  DataParams.propTypes = {
    hasError: PropTypes.bool.isRequired,
    updateParams: PropTypes.func.isRequired,
    addThingFilter: PropTypes.func.isRequired,
    addTimePeriodFilter: PropTypes.func.isRequired,
    addCustomTimePeriodFilter: PropTypes.func.isRequired,
    match: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  const withConnect = connect(
    state => ({
      hasError: fromState.hasError(state),
    }),
    { updateParams, addThingFilter, addTimePeriodFilter, addCustomTimePeriodFilter },
  );
  return compose(
    withRouter,
    withConnect,
  )(DataParams);
};
