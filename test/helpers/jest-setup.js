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
