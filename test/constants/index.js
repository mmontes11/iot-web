import { initialState as app } from "reducers/app";
import { initialState as request } from "reducers/request";
import { initialState as auth } from "reducers/auth";
import { initialState as things } from "reducers/things";
import { initialState as params } from "reducers/params";
import { initialState as filters } from "reducers/filters";
import { initialState as data } from "reducers/data";

export const initialState = {
  app,
  request,
  auth,
  things,
  params,
  filters,
  data,
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
