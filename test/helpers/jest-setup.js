jest.mock("lib/iotClient", () => ({
  authService: {
    isAuth: () => Promise.resolve(true)
  }
}));
