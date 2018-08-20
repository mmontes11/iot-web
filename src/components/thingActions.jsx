import React from "react";
import PropTypes from "prop-types";

const ThingActions = ({ googleMapsUrl, onStatsClick }) => (
  <p className="buttons is-horizontal-center">
    {googleMapsUrl && (
      <a
        id="google-maps-link"
        className="button is-medium"
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon is-medium">
          <i className="fas fa-map-marked" />
        </span>
      </a>
    )}
    {onStatsClick && (
      <button id="stats-button" className="button is-medium" onClick={() => onStatsClick()}>
        <span className="icon is-medium">
          <i className="fas fa-chart-bar" />
        </span>
      </button>
    )}
  </p>
);

ThingActions.propTypes = {
  googleMapsUrl: PropTypes.string,
  onStatsClick: PropTypes.func,
};

ThingActions.defaultProps = {
  googleMapsUrl: null,
  onStatsClick: null,
};

export default ThingActions;
