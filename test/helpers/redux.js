export const initialState = {
  app: {
    isHamburgerMenuExpanded: false,
  },
  auth: {
    isAuth: false,
    username: null,
    password: null,
    showError: true,
  },
  request: {
    pending: 0,
    statusCode: null,
    error: null,
  },
  things: {
    loadedThings: [],
    selectedThing: null,
  },
};
