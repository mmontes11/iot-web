export const isObservationDisabled = observation => {
  if (observation && observation.isDisabled !== undefined) {
    return observation.isDisabled;
  }
  return true;
};
