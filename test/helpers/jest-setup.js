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
  },
}));

const mockDate = new Date("1970-1-1");
const _Date = Date;
global.Date = jest.fn(() => mockDate);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;
global.Date.toLocaleString = jest.fn(() => mockDate.toISOString());
