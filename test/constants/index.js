export const initialState = {
  app: {
    isHamburgerMenuExpanded: false,
    isMapDialogOpened: false,
    showError: true,
  },
  auth: {
    isAuth: false,
    username: null,
    password: null,
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
  stats: {
    params: {
      type: {
        items: ["event", "measurement"],
        isActive: false,
        selectedItem: null,
      },
      observation: {
        items: [],
        isActive: false,
        isLoading: false,
        isDisabled: true,
        selectedItem: null,
      },
      reset: {
        isDisabled: true,
      },
    },
    items: [],
    isLoadingStats: false,
  },
};

export const thing = {
  name: "foo",
  ip: "http://192.168.0.20",
  topic: "bar",
  lastObservation: "2018-08-18T10:30:04.158Z",
  supportedObservationTypes: {
    event: ["foo", "bar"],
    measurement: ["bar", "foo"],
  },
  googleMapsUrl: "https://www.google.es/maps",
  geometry: {
    coordinates: [-40.58457, 40.21339],
    type: "Point",
  },
};
