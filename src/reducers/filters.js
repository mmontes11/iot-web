import { FILTER_TYPE_SELECT, ADD_FILTER_TYPE } from "constants/actionTypes/filters";
import { RESET } from "constants/actionTypes/common";
import { FILTER_TYPES } from "constants/filterTypes";

export const initialState = {
  type: {
    items: FILTER_TYPES,
    isActive: false,
    isDisabled: false,
  },
  thing: {
    items: [],
    isActive: false,
    isDisabled: false,
    selectedItem: null
  },
  items: [],
};

export default (state = initialState, { type, addedFilterType }) => {
  switch (type) {
    case FILTER_TYPE_SELECT:
      return { ...state, type: { ...state.type, isActive: !state.type.isActive } };
    case ADD_FILTER_TYPE: {
      const addedItems = [...state.items];
      if (!addedItems.includes(addedFilterType)) {
        addedItems.push(addedFilterType);
      }
      const filterTypeItems = state.type.items.filter(item => !addedItems.includes(item));
      const allItemsSelected = FILTER_TYPES.every(item => addedItems.includes(item));
      return {
        ...state,
        type: {
          ...state.type,
          items: filterTypeItems,
          isActive: false,
          isDisabled: allItemsSelected,
        },
        items: addedItems,
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};
