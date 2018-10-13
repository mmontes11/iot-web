import { STATS_UPDATED, STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR } from "constants/actionTypes/stats";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";
import { normalizeStats } from "helpers/statsNormalizer";
import iotClient from "lib/iotClient";

const requestStats = (type, observation, onStart, onSuccess, onError) => {
  if (type === EVENT_TYPE) {
    onStart();
    iotClient.eventService
      .getStatsByType(observation)
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  } else if (type === MEASUREMENT_TYPE) {
    onStart();
    iotClient.measurementService
      .getStatsByType(observation)
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  }
};

export const getStats = () => (dispatch, getState) => {
  const {
    stats: {
      params: {
        type: { selectedItem: selectedType },
        observation: { selectedItem: selectedObservation },
      },
    },
  } = getState();
  if (!selectedType || !selectedObservation) {
    return;
  }
  dispatch({ type: STATS_REQUEST });
  requestStats(
    selectedType,
    selectedObservation,
    () => dispatch({ type: STATS_REQUEST }),
    res => {
      dispatch({ type: STATS_REQUEST_SUCCESS });
      let stats;
      const responseStats = res.body.stats;
      if (responseStats) {
        stats = responseStats.map(normalizeStats);
      }
      dispatch({ type: STATS_UPDATED, stats });
    },
    () => dispatch({ type: STATS_REQUEST_ERROR }),
  );
};
