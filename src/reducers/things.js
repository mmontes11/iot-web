import { THINGS_UPDATED, THING_SELECTED } from "constants/actionTypes/things";

const initialState = {
  loadedThings: [],
  selectedThing: null,
};

export default (state = initialState, { type, things, thing }) => {
  switch (type) {
    case THINGS_UPDATED:
      return { ...state, loadedThings: things };
    case THING_SELECTED:
      if (state.selectedThing !== null && state.selectedThing.name === thing.name) {
        return { ...state, selectedThing: null };
      }
      return { ...state, selectedThing: thing };

    default:
      return state;
  }
};