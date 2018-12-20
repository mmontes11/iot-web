jest.mock("lib/iotClient", () => ({
  authService: {
    isAuth: () => Promise.resolve(true),
    getToken: () => Promise.resolve("token"),
    setCredentials: () => undefined,
    logout: () => Promise.resolve(),
  },
  thingsService: {
    getThings: () => Promise.resolve({ statusCode: 200, body: { things: [] } }),
  },
  eventService: {
    getTypes: () => Promise.resolve({ statusCode: 200, body: { types: [] } }),
    getStatsByType: () =>
      Promise.resolve({
        statusCode: 200,
        body: {
          stats: [
            {
              total: 210,
              avgByHour: 8.75,
              maxByHour: 39,
              minByHour: 1,
              stdDevByHour: 9.661995998067205,
              data: {
                type: "door-closed",
                thing: "raspi",
              },
            },
          ],
        },
      }),
    getStats: () =>
      Promise.resolve({
        statusCode: 200,
        body: {
          stats: [
            {
              total: 210,
              avgByHour: 8.75,
              maxByHour: 39,
              minByHour: 1,
              stdDevByHour: 9.661995998067205,
              data: {
                type: "door-closed",
                thing: "raspi",
              },
            },
          ],
        },
      }),
  },
  measurementService: {
    getTypes: () => Promise.resolve({ statusCode: 200, body: { types: [] } }),
    getStatsByType: () =>
      Promise.resolve({
        statusCode: 200,
        body: {
          stats: [
            {
              avg: 18.833960466777803,
              max: 29.8,
              min: 10.1,
              stdDev: 2.668893128334042,
              data: {
                type: "temperature-outdoor",
                thing: "raspi",
                unit: {
                  name: "degress",
                  symbol: "°C",
                },
              },
            },
          ],
        },
      }),
    getStats: () =>
      Promise.resolve({
        statusCode: 200,
        body: {
          stats: [
            {
              total: 210,
              avgByHour: 8.75,
              maxByHour: 39,
              minByHour: 1,
              stdDevByHour: 9.661995998067205,
              data: {
                type: "door-closed",
                thing: "raspi",
              },
            },
          ],
        },
      }),
  },
}));

jest.mock("helpers/dateFormatter", () => ({
  formatDate: () => "Mock Date",
}));
