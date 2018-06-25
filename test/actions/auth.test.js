import { isAuth } from "actions/auth";

describe("actions/auth", () => {
  describe("isAuth", () => {
    it("dispatches a isAuth action after success", () => {
      const thunk = isAuth();
      const dispatch = jest.fn();
      thunk(dispatch);
      expect(thunk).toBeAThunk();
      expect(thunk).toMatchSnapshot();
    });
  });
});
