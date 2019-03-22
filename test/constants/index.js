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
    items: [],
    selectedItem: null,
    shouldShowNotFoundError: false,
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
    filters: {
      type: {
        items: ["date", "thing"],
        isActive: false,
        isDisabled: false,
      },
      thingFilter: {
        isLoading: false,
        isActive: false,
        isDisabled: false,
        items: [],
        selectedItem: null,
      },
      dateFilter: {
        isCustomSelected: false,
        timePeriod: {
          isLoading: false,
          isActive: false,
          isDisabled: false,
          items: [],
          selectedItem: null,
        },
        custom: {
          startDate: null,
          endDate: null,
        },
      },
      items: [],
    },
    items: [],
    isLoading: false,
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

export const statsWithUnits = {
  data: [
    {
      thing: "raspi",
      value: 10,
    },
    {
      thing: "raspi2",
      value: 11,
    },
    {
      thing: "raspi3",
      value: 12,
    },
  ],
  type: "measurement",
  unit: {
    symbol: "ºC",
  },
};

export const statsWithoutUnits = {
  data: [
    {
      thing: "raspi",
      value: 10,
    },
    {
      thing: "raspi2",
      value: 11,
    },
    {
      thing: "raspi3",
      value: 12,
    },
  ],
  type: "measurement2",
};
