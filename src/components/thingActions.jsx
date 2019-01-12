import React from "react";
import PropTypes from "prop-types";

const ThingActions = ({ thing, onEventStatsClick, onMeasurementStatsClick }) => (
  <p className="buttons is-horizontal-center">
    {thing.googleMapsUrl && (
      <a id="google-maps-link" className="button" href={thing.googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fas fa-map-marked" />
        </span>
        <span>Google Maps</span>
      </a>
    )}
    {thing.supportedObservationTypes.event.length > 0 && (
      <button id="event-stats-button" className="button" onClick={() => onEventStatsClick()}>
        <span className="icon">
          <i className="fas fa-chart-bar" />
        </span>
        <span>Event Stats</span>
      </button>
    )}
    {thing.supportedObservationTypes.measurement.length > 0 && (
      <button id="measurement-stats-button" className="button" onClick={() => onMeasurementStatsClick()}>
        <span className="icon">
          <i className="fas fa-chart-bar" />
        </span>
        <span>Measurement Stats</span>
      </button>
    )}
  </p>
);

ThingActions.propTypes = {
  thing: PropTypes.shape({}).isRequired,
  onEventStatsClick: PropTypes.func.isRequired,
  onMeasurementStatsClick: PropTypes.func.isRequired,
};

export default ThingActions;
