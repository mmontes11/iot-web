import { toggleHamburgerMenu } from "actions/app";

describe("actions/auth", () => {
  const testThunk = thunk => {
    const dispatch = jest.fn();
    thunk(dispatch);
    expect(thunk).toBeAThunk();
    expect(thunk).toMatchSnapshot();
  };
  it("dispatches an toggleHamburgerMenu action", () => {
    testThunk(toggleHamburgerMenu());
  });
});
