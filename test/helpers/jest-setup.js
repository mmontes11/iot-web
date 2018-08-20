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
}));

const mockDate = new Date("1970-1-1");
const _Date = Date;
global.Date = jest.fn(() => mockDate);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;
global.Date.toLocaleString = jest.fn(() => mockDate.toISOString());
