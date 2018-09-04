import React from "react";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import Dropdown from "components/dropdown";

const Stats = () => (
  <div className="container is-fluid section">
    <div className="box columns is-half-widescreen">
      <div className="column is-one-quarter">
        <Dropdown
          label="Select Type"
          items={["Item1", "Item2", "Item3"]}
          isActive
          isLoading={false}
          isDisabled={false}
          onButtonClick={() => undefined}
          onItemClick={() => undefined}
        />
      </div>
      <div className="column is-one-quarter">
        <Dropdown
          label="Select Thing"
          items={["Item1", "Item2", "Item3"]}
          isActive={false}
          isLoading
          isDisabled={false}
          onButtonClick={() => undefined}z
          onItemClick={() => undefined}
        />
      </div>
      <div className="column is-one-quarter">
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
      <div className="column is-one-quarter">
        <button className="button is-warning is-fullwidth" disabled>
          <span>Reset</span>
          <span className="icon is-small">
            <i className="fas fa-eraser" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default withResetOnUnmount(Stats);
