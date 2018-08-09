import PropTypes from "prop-types";

export const pointToLatLng = geometry => {
  if (
    geometry == null ||
    geometry.coordinates == null ||
    geometry.coordinates.length === 0 ||
    geometry.type == null ||
    geometry.type !== "Point"
  ) {
    return null;
  }
  const [lng, lat] = geometry.coordinates;
  return { lat, lng };
};

export const PropTypeLatLng = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
});
