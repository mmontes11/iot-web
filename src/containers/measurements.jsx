import { withRouter } from "react-router-dom";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";

const Measurements = () => null;

export default compose(
  withRouter,
  withResetOnUnmount,
)(Measurements);
