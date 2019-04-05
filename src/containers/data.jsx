import { withResetOnUnmount } from "hocs/resetOnUnmount";
import { compose } from "recompose";

const Data = () => null;

export default compose(withResetOnUnmount)(Data);
