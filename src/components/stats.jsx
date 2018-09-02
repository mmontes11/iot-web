import React from "react";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import Dropdown from "components/dropdown";

const Stats = () => (
  <div className="container is-fluid section">
    <div className="box level">
      <div className="level-left">
        <div className="level-item">
          <Dropdown
            label="Select Type"
            items={["Item1", "Item2", "Item3"]}
            isActive
            isLoading={false}
            isDisabled={false}
            onButtonClick={() => undefined}
            onItemClick={() => undefined}
          />
          <Dropdown
            label="Select Thing"
            items={["Item1", "Item2", "Item3"]}
            isActive={false}
            isLoading
            isDisabled={false}
            onButtonClick={() => undefined}
            onItemClick={() => undefined}
          />
          <Dropdown
            label="Select Time Period"
            items={["Item1", "Item2", "Item3"]}
            isActive={false}
            isLoading={false}
            isDisabled
            onButtonClick={() => undefined}
            onItemClick={() => undefined}
          />
        </div>
      </div>
    </div>
  </div>
);

export default withResetOnUnmount(Stats);
