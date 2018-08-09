import React from "react";
import PropTypes from "prop-types";
import TagList from "components/tagList";
import ThingActions from "components/thingActions";
import Map from "containers/map";
import { pointToLatLng } from "helpers/geometry";

const ThingDetail = ({ thing }) => (
  <div className="card">
    <div className="card-content">
      <div className="columns">
        <div className="column is-three-fifths has-text-centered">
          <p className="title is-3 has-text-primary is-spaced">{thing.name}</p>
          <p className="title is-6">
            <strong>IP address:</strong>{" "}
            <a href={`http://${thing.ip}`} target="_blank" rel="noopener noreferrer">
              {thing.ip}
            </a>
          </p>
          <p className="title is-6">
            <strong>MQTT topic:</strong> <span className="has-text-info">{thing.topic}</span>
          </p>
          <p className="title is-6">
            <strong>Last observation:</strong>{" "}
            <span className="has-text-info">{new Date(thing.lastObservation).toLocaleString()}</span>
          </p>
          <TagList label="Events:" tags={thing.supportedObservationTypes.event} tagStyle="is-warning" />
          <TagList label="Measurements:" tags={thing.supportedObservationTypes.measurement} tagStyle="is-warning" />
          <ThingActions thing={thing} />
        </div>
        <div className="column is-two-fifths">
          <Map marker={{ label: thing.name, point: pointToLatLng(thing.geometry) }} />
        </div>
      </div>
    </div>
  </div>
);

ThingDetail.propTypes = {
  thing: PropTypes.shape({}).isRequired,
};

export default ThingDetail;