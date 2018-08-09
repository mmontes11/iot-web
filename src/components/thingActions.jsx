import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const ThingActions = ({ thing, history }) => (
  <p className="buttons is-horizontal-center">
    <a className="button is-medium" href={thing.googleMapsUrl} target="_blank" rel="noopener noreferrer">
      <span className="icon is-medium">
        <i className="fas fa-map-marked" />
      </span>
    </a>
    <button className="button is-medium" onClick={() => history.push("/stats")}>
      <span className="icon is-medium">
        <i className="fas fa-chart-bar" />
      </span>
    </button>
  </p>
);

ThingActions.propTypes = {
  thing: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ThingActions);
